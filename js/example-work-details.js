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
          <p className="modal__text">
		  {WorkExample.long_desc}
          </p>
          <p className="modal__description">
		  {WorkExample.desc1}
          </p>
          <p className="modal__description">
	      {WorkExample.desc2}
          </p>
          <p className="modal__description">
	      {WorkExample.desc3}
          </p>
          <p className="modal__description">
	      {WorkExample.desc4}
          </p>
          <p className="modal__description">
	      {WorkExample.desc5}
          </p>
          <p className="modal__description">
	      {WorkExample.desc6}
          </p>
          <p className="modal__description">
	      {WorkExample.desc7}
          </p>
          <p className="modal__description">
	      {WorkExample.desc8}
          </p>
          <p className="modal__description">
	      {WorkExample.desc9}
          </p>
          <p className="modal__description">
	      {WorkExample.desc10}
          </p>
        </div>
      </div>
    
    )	
  }
}

//		<!-- Uncomment to add link but note that it will be added to all modal windows
//          <a className="color--skyBlue modal__link"
//            target="_blank" //Opens link in new tab
//            href={WorkExample.href}>
//            Check it out
//          </a>
//		End of commented section-->

export default ExampleWorkDetails;
