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
  
  it('Print out the object', () =>{
    console.log(Component.debug()); //This just prints out the Component object
  });
  
  it('Confirm the type of the <span> element', () =>{
    expect(Component.type()).toEqual('span');
  });
  
  it('Expect to have as many children as the work examples array', () =>{
    expect(Component.find('ExampleWorkBubble').length).toEqual(MyWorkExamples.length);
  });
  
  it('Should be able to open or close the modal window', () =>{
	Component.instance().OpenModal(); //Enzyme method instance allows to call our functions
    expect(Component.instance().state.modalOpen).toBe(true);
	Component.instance().CloseModal();
    expect(Component.instance().state.modalOpen).toBe(false);
  });

});

describe('ExampleWorkBubble component', () => {
  let MockOpenModalFn = jest.fn(); //Allows to simulate a function call
  let Component = shallow(<ExampleWorkBubble Example = {MyWorkExamples[1]} OpenModal = {MockOpenModalFn} />); //Need to give it one set of data, not whole array
  let Images = Component.find("img"); //Returns an array of all <img> components found
  
  //Each test is denoted by the it functions below
  
  it('Should be one <img> element', () =>{
    expect(Images.length).toEqual(1);
  });
  
  it('Should have correct image src', () =>{
    expect(Images.prop('src')).toEqual(MyWorkExamples[1].image.src);
  });
  
  it('Should call the OpenModal handler when clicked', () =>{
	Component.find('.section__exampleWrapper').simulate('click');
    expect(MockOpenModalFn).toHaveBeenCalled();
  });

});


