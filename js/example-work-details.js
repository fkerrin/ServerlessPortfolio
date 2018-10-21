//This React code will supply the modal windows containing details on clicking the work example bubbles.

import React from 'react';

class ExampleWorkDetails extends React.Component {
  render(){
	let WorkExample = this.props.Example;
	let ModalState = this.props.Open ? 'modal--open' : 'modal--closed';
	//This will give us the state for the modal window depending on what was passed in.

	return(

      <div className={"background--skyBlue " + ModalState}>
        <span className="color--cloud modal__closeButton" onClick={this.props.CloseModal}>
          <i className="fa fa-window-close-o"></i>
        </span>
          <img alt={WorkExample.image.desc}
             className="modal__image"
             src={WorkExample.image.src} />
        <div className="color--cloud modal__text">
          <h2 className="modal__title">
		  {WorkExample.title}
          </h2>
          <a className="color--skyBlue modal__link"
            target="_blank" //Opens link in new tab
            href={WorkExample.href}>
            Check it out
          </a>
          <p className="modal__description">
		  {WorkExample.desc1}
		  <br/>
	      {WorkExample.desc2}
		  <br/>
	      {WorkExample.desc3}
		  <br/>
	      {WorkExample.desc4}
          </p>
        </div>
      </div>
    
    )	
  }
}


export default ExampleWorkDetails;
