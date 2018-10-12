//This React code will supply the Work Examples section of the portfolio.

import React from 'react';
import ExampleWorkDetails from '../js/example-work-details';

class ExampleWork extends React.Component{

  constructor(props) {
    super(props);
	
	this.state = {
	  'modalOpen': false,
	  'selectedExample': this.props.Work[0]
	  //Starting state will be first work example with modal window closed.
	};
	
	this.OpenModal = this.OpenModal.bind(this);
	this.CloseModal = this.CloseModal.bind(this);
  }

  OpenModal(Event, Example) {
	this.setState({
      'modalOpen': true,
      'selectedExample': Example
    });	  
  }
  
  CloseModal(Event){
	this.setState({
      'modalOpen': false
    });	  

  }

  render(){
    return(
	/*HTML code cut out of index.html. Note that the name 'class' has been
	replaced by 'className' as 'class' is a reserved name in JavaScript.
	Note also that html comments <!--xxx--> need to be replaced by JS comments.
	Finally, note that render() method can only return one tag and we want to  return
	the <section> and <ExampleWorkDetails> tags so we wrap them in a <span> element.*/
	
	  <span>
        <section className="section section--alignCentered section--description">

	    {this.props.Work.map( (example, idx) => {
	      return(
            <ExampleWorkBubble Example = {example} key = {idx} 
			  OpenModal = {this.OpenModal} />
		    /* Note - passing the OpenModal function as property to give the ExampleWorkBubble class acces
			to the function for onClick functionality outside this class. */
          )		
	    })
	    }

	    </section>
        <ExampleWorkDetails Example = {this.state.selectedExample} Open = {this.state.modalOpen} 
		  CloseModal = {this.CloseModal} />
	  </span>
	)
  }
}

class ExampleWorkBubble extends React.Component{

  render(){
	let WorkExample = this.props.Example;
    return (
   	  <div className="section__exampleWrapper"
	    onClick={ (Event) => this.props.OpenModal(Event, WorkExample) } >
        <div className="section__example">
          <img alt={WorkExample.image.desc}
               className="section__exampleImage"
               src={WorkExample.image.src}/>
          <dl className="color--cloud">
            <dt className="section__exampleTitle section__text--centered">
			  {WorkExample.title}
            </dt>
          </dl>
        </div>
      </div>
	)
  }

}

export default ExampleWork; //Exprts this class anyway (default)
export {ExampleWorkBubble}; //Will export this if a module requests it (for testing)
