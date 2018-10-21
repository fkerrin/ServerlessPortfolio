import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work'; //This is my example code.

console.log("Frank's serverless portfolio."); //Echo to the console for troubleshooting

const MyWorkExamples = [
  {
    'title': 'Broadcast Technology',
	'href': 'http://www.osn.com',
	'desc1': '- Complete revamp of broacast server room',
	'desc2': '- Upgrade of studio area and facilities',
	'desc3': '- Addition of 40 channels to line-up with HD upgrades',
	'desc4': '- Upgrade of playout and workflow in Sports and News area',
	'image': {
	  'desc': 'Broadcast TV Rack Room',
	  'src': 'images/MediaLab_rackA.jpg',
	  'comment': ''
	}
  },
  {
    'title': 'Control Rooms',
	'href': 'http://www.osn.com',
	'desc1': '- Complete revamp of broacast NOC',
	'desc2': '- Consolidation of two different working groups for  efficiency',
	'desc3': '- Incorporation of comprehensive alarm and monitoring system',
	'desc4': '- Upgrade and consolidation of post-production areas',
	'image': {
	  'desc': 'Broadcast TV Control Room',
	  'src': 'images/tv-control-room.jpg',
	  'comment': ''
	}
  },
  {
    'title': 'Cloud Technology',
	'href': 'http://www.osn.com',
	'desc1': '- Replication of archive to AWS, automation of archive workflow',
	'desc2': '- Disaster recovery strategy based on cloud infrastructure',
	'desc3': '- Team re-skilling for cloud technologies',
	'desc4': '- PoC for playout and post-production',
	'image': {
	  'desc': 'Python Code for AWS Automation',
	  'src': 'images/AWS Automation Code.png',
	  'comment': ''
	}
  }
];


ReactDOM.render(<ExampleWork Work = {MyWorkExamples} />, document.getElementById('example-work'));
// This renders the example code into the section referred to by 'example-work' in index.html
