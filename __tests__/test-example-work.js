import React from 'react';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ExampleWork, {ExampleWorkBubble} from '../js/example-work';

Enzyme.configure({adapter: new Adapter()});

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

describe('ExampleWork component', () => {
  let Component = shallow(<ExampleWork Work = {MyWorkExamples}/>);
  //Each test is denoted by the it functions below
  
  it('There should be a <section> element', () =>{
    console.log(Component.debug()); //This just prints out the Component object
  });
  
  it('Confirm the type of the <section> element', () =>{
    expect(Component.type()).toEqual('section');
  });
  
  it('Expect to have as many children as the work examples array', () =>{
    expect(Component.find('ExampleWorkBubble').length).toEqual(MyWorkExamples.length);
  });

});

describe('ExampleWorkBubble component', () => {
  let Component = shallow(<ExampleWorkBubble Example = {MyWorkExamples[1]}/>); //Need to give it one set of data, not whole array
  let Images = Component.find("img"); //Returns an array of all <img> components found
  //Each test is denoted by the it functions below
  
  it('Should be one <img> element', () =>{
    expect(Images.length).toEqual(2);
  });
  
  it('Should have correct image src', () =>{
    expect(Images.prop('src')).toEqual(MyWorkExamples[1].image.src);
  });

});


