import boto3  # Need this to access AWS objects
import zipfile  # Need this to unzip the packaged code
import io  # Allows to read and write files to/from memory storage
import mimetypes  #Need this to guess the content type

def lambda_handler(event, context):

    # Event trigger is new file on S3 - get the bucket name and the new file from the event recordset
    # Assuming only one event so there should only be one record - ['records'][0]
    BucketName = event['Records'][0]['s3']['bucket']['name']
    NewFileUploaded = event['Records'][0]['s3']['object']['key']
    
    s3 = boto3.resource('s3')  # Create an S3 resource - need this to refer to S3 objects
    BuildBucket = s3.Bucket(BucketName)  # Where packaged code is stored
    PortfolioBucket = s3.Bucket('fkerrin.com')  # Where code will be unpackaged to
    
    # Create a pointer to the file object in memory and read the zipfile into that memory location
    ZippedCode = io.BytesIO()
    BuildBucket.download_fileobj(NewFileUploaded, ZippedCode)

    # Now unzip the contents of each file and send to the destination bucket
    with zipfile.ZipFile(ZippedCode) as MyZip:
        for FileName in MyZip.namelist():
            UnzippedObject = mzip.open(FileName)
            PortfolioBucket.upload_fileobj(UnzippedObject, FileName,
                ExtraArgs = {'ContentType' : mimetypes.guess_type(FileName)[0]})
            PortfolioBucket.Object(FileName).Acl().put(ACL = 'public-read')
            # ACL is required to give public permissions to the file objects
	
    return
