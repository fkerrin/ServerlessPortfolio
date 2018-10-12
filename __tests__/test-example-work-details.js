import React from 'react';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ExampleWorkDetails from '../js/example-work-details';

Enzyme.configure({adapter: new Adapter()});

const ExampleData = 
  {
    'title': 'Broadcast Technology',
	'href': 'https://example.com',
	'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
	'image': {
	  'desc': 'Broadcast TV Rack Room',
	  'src': 'images/MediaLab_rackA.jpg',
	  'comment': ''
	}
  };


describe('ExampleWork component', () => {
  let Component = shallow(<ExampleWorkDetails Example = {ExampleData} Open = {false} />);
  let OpenComponent = shallow(<ExampleWorkDetails Example = {ExampleData} Open = {true} />);
  let Anchors = Component.find('a');
  
  //Each test is denoted by the it functions below
  
  it('There should be one anchors <a> element', () =>{
    expect(Anchors.length).toEqual(1);
  });
  
  it('Modal window should  link to our project', () =>{
    expect(Anchors.prop('href')).toEqual(ExampleData.href);
  });
  
  it('Test modal window state - open or closed', () =>{
    expect(Component.find('.background--skyBlue').hasClass('modal--closed')).toBe(true);
    expect(OpenComponent.find('.background--skyBlue').hasClass('modal--open')).toBe(true);
  });
  
});
