import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work'; //This is my example code.

console.log("Frank's serverless portfolio."); //Echo to the console for troubleshooting

const MyWorkExamples = [
  {
    'title': 'Technology Leadership',
	'href': 'http://www.osn.com',
	'desc1': '- Planning of technology strategy for short and long term',
	'desc2': '- Responsible for Capex and Opex budgets and staffing',
	'desc3': '- Leading large and complex projects in an ever-changing landscape',
	'desc4': '- Advising senior management on technology issues',
	'image': {
	  'desc': 'Broadcast TV Rack Room',
	  'src': 'images/DR_Planning.jpg',
	  'comment': ''
	}
  },
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
  },
  {
    'title': 'Broadcast Facility Rebuild',
	'href': 'http://www.osn.com',
	'desc1': '- Set up broadcast facility in Bahrain and migrated all services from Rome',
	'desc2': '- Managing Civil and MEP contractors to deliver base infrastructure',
	'desc3': '- Working with systems integrators for build of playout, NOC and satellite uplink',
	'desc4': '- Working with Operations management in Rome and Bahrain for migration of services',
	'image': {
	  'desc': 'Bahrain Playout Control Room',
	  'src': 'images/BNC NOC.JPG',
	  'comment': ''
	}
  },
  {
    'title': 'Miscellaneous Projects',
	'href': 'http://www.osn.com',
	'desc1': '- Migration of entire DTH playout to HD with closed caption subtitling',
	'desc2': '- Setup of OTT platform with VoD and live streaming',
	'desc3': '- Setup of broadcast IT infrastructure and migration of media workflows',
	'desc4': '- Continual expansion of the broadcast platform to meet market expectations',
	'image': {
	  'desc': 'Gannt Chart',
	  'src': 'images/generic-gantt-chart.JPG',
	  'comment': ''
	}
  }

];


ReactDOM.render(<ExampleWork Work = {MyWorkExamples} />, document.getElementById('example-work'));
// This renders the example code into the section referred to by 'example-work' in index.html
