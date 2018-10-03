import boto3  # Need this to access AWS objects
import zipfile  # Need this to unzip the packaged code
import io  # Allows to read and write files to/from memory storage
import mimetypes  #Need this to guess the content type
from botocore.client import Config  # To change the config of the S3 resource to include decryotion

def lambda_handler(event, context):

    """ Event trigger can be CodePipelne trigger or new file on S3 - get the bucket name and the new file from the event recordset.
     Assuming only one event in each case - ['CodePipeline.job']['data']['inputArtifacts'][0] or ]['records'][0]"""

    # TROUBLESHOOTING
    """print(event)
    Job = event.get('CodePipeline.job')
    CodePipeline = boto3.client('codepipeline')
    CodePipeline.put_job_success_result(jobId = Job['id'])
    """
    Job = event.get('CodePipeline.job')  # This will get the CodePipeline job if this was the trigger or None if not
    if Job:
        try:
            BucketName = Job['data']['inputArtifacts'][0]['location']['s3Location']['bucketName']
            NewFileUploaded = Job['data']['inputArtifacts'][0]['location']['s3Location']['objectKey']
        except:
            print('Something is wrong with the CodePipeline trigger data')
            CodePipeline = boto3.client('codepipeline')
            CodePipeline.put_job_failure_result(jobId = Job['id'])
    else:
        try:
            BucketName = event['Records'][0]['s3']['bucket']['name']
            NewFileUploaded = event['Records'][0]['s3']['object']['key']
        except:
            print('Something is wrong with the S3 trigger data')

    # Print out the bucket and object so we know where the trigger came from
    print('New build file {} was uploaded to S3 bucket {}'.format(NewFileUploaded, BucketName))

    try:
        S3 = boto3.resource('s3', config = Config(signature_version = 's3v4'))  # Create an S3 resource - need this to refer to S3 objects
        BuildBucket = S3.Bucket(BucketName)  # Where packaged code is stored
        ZipObject = S3.Object(BucketName, NewFileUploaded)
        PortfolioBucket = S3.Bucket('fkerrin.com')  # Where code will be unpackaged to
        SNS = boto3.resource('sns')
        Topic = SNS.Topic('arn:aws:sns:eu-west-1:258508589804:CodeDeployed')

        # Create a pointer to the file object in memory and read the zipfile into that memory location
        ZippedCode = io.BytesIO()
        BuildBucket.download_fileobj(NewFileUploaded, ZippedCode)

        # Now unzip the contents of each file and send to the destination bucket
        with zipfile.ZipFile(ZippedCode) as MyZip:
            for FileName in MyZip.namelist():
                UnzippedObject = MyZip.open(FileName)
                PortfolioBucket.upload_fileobj(UnzippedObject, FileName,
                    ExtraArgs = {'ContentType' : mimetypes.guess_type(FileName)[0]})
                PortfolioBucket.Object(FileName).Acl().put(ACL = 'public-read')
                # ACL is required to give public permissions to the file objects

        # Now need to notify to SNS and CodePipeline that new code has been deployed
        NotificationMessage = 'New file {} received on Bucket {} and deployed to Bucket {}'.format(NewFileUploaded, BucketName, PortfolioBucket.name)
        NotificationSubject = 'Notification for deployment of code on AWS S3'
        Topic.publish(Message = NotificationMessage, Subject = NotificationSubject)
        if Job:
            CodePipeline = boto3.client('codepipeline')
            CodePipeline.put_job_success_result(jobId = Job['id'])
    except:
        NotificationMessage = 'Deployent of code was unsuccessful - please check configurations'
        NotificationSubject = 'Code Deployment Failed'
        Topic.publish(Message = NotificationMessage, Subject = NotificationSubject)
        if Job:
            CodePipeline = boto3.client('codepipeline')
            CodePipeline.put_job_failure_result(jobId = Job['id'])

    return
