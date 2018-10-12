import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work'; //This is my example code.

console.log("Frank's serverless portfolio."); //Echo to the console for troubleshooting

const MyWorkExamples = [
  {
    'title': 'Broadcast Technology',
	'href': 'https://example.com',
	'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
	'image': {
	  'desc': 'Broadcast TV Rack Room',
	  'src': 'images/MediaLab_rackA.jpg',
	  'comment': ''
	}
  },
  {
    'title': 'Control Rooms',
	'href': 'https://example.com',
	'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
	'image': {
	  'desc': 'Broadcast TV Control Room',
	  'src': 'images/tv-control-room.jpg',
	  'comment': ''
	}
  },
  {
    'title': 'Cloud Technology',
	'href': 'https://example.com',
	'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
	'image': {
	  'desc': 'Python Code for AWS Automation',
	  'src': 'images/AWS Automation Code.png',
	  'comment': ''
	}
  }
];


ReactDOM.render(<ExampleWork Work = {MyWorkExamples} />, document.getElementById('example-work'));
// This renders the example code into the section referred to by 'example-work' in index.html
