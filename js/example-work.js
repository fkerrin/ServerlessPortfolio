//This React code will supply the Work Examples section of the portfolio.

import React from 'react';

class ExampleWork extends React.Component{
  render(){
    return(
	/*HTML code cut out of index.html. Note that the name 'class' has been
	replaced by 'className' as 'class' is a reserved name in JavaScript.
	Note also that html comments <!--xxx--> need to be replaced by JS comments.*/
      <section className="section section--alignCentered section--description">

	  {this.props.Work.map( (example, idx) => {
	    return(
          <ExampleWorkBubble Example = {example} key = {idx} />
        )		
	  })
	  }

	  </section>
	)
  }
}

class ExampleWorkBubble extends React.Component{

  render(){
	let WorkExample = this.props.Example;
    return (
   	  <div className="section__exampleWrapper">
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
