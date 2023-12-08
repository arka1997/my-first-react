// STATE //
import React from 'react';
import ReactDOM from 'react-dom';
//The state object is where you store property values that belongs to the component.
//When the state object changes, the component re-renders.
class Human extends React.Component{
    constructor(){
      super();
      this.state= {
        creator : "God",
        Destroyer : "Human"
      };
    }
      render(){
        return (
        <>
        <h1>The {this.state.creator}</h1>
          <h2>The {this.state.Destroyer}</h2>
          </>
          );
  }
      }
      ReactDOM.render(<Human />, document.getElementById('root'));
  
  // SET_STATE_FUNC  //
      class Tt extends React.Component{
        constructor(props){
          super(props);
          this.state={
            age:"24",
            color:"brown",
            food:"mutton"
          }
          }
          clr_change = () =>{//here we use arrow functions instead of normal function because for arrow function, after button is clicked, "this" will point to the arrow function objects,
            //  but if we use normal function, then on button click "this" will point to the button object 
            //  rather then the above func to change colour.So if this wont point to the "clr_change" function, then on btn_click it won't change the colour
            this.setState({color:"white"});
          }
        render(){
          return (
          <>
          <h2>hii {this.state.color}</h2>
          <button onClick={this.clr_change}>Channge</button>
          </>//here "this" points to arrow func "clr_change" object & changes the colour
          );
        }
      }
      ReactDOM.render(<Tt />,document.getElementById('root'));
      export default( Human,Tt);