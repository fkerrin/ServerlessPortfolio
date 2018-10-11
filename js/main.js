import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work'; //This is my example code.

console.log("Frank's serverless portfolio."); //Echo to the console for troubleshooting

const MyWorkExamples = [
  {
    'title': "Broadcast Technology",
	'image': {
	  'desc': "Broadcast TV Rack Room",
	  'src': "images/MediaLab_rackA.jpg",
	  'comment': ""
	}
  },
  {
    'title': "Control Rooms",
	'image': {
	  'desc': "Broadcast TV Control Room",
	  'src': "images/tv-control-room.jpg",
	  'comment': ""
	}
  },
  {
    'title': "Cloud Technology",
	'image': {
	  'desc': "Python Code for AWS Automation",
	  'src': "images/AWS Automation Code.png",
	  'comment': ""
	}
  }
];


ReactDOM.render(<ExampleWork Work = {MyWorkExamples} />, document.getElementById('example-work'));
// This renders the example code into the section referred to by 'example-work' in index.html
