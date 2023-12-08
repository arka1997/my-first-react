import React from 'react';
import ReactDOM from 'react-dom';//here we import this to use the JSX where actually we are using html in javascript
import './index.css';
import App from './App';
import index2 from './react2';
import Human from './react2.js';//importing anothe component from a different file
const yo= (
  <div>
    <h1>skdjfnksjd</h1>
    <h2>dsasdsds</h2>
    <li>sddfg</li>
    <li>sdfddsf</li>
  </div>
);
ReactDOM.render(yo ,document.getElementById('root'));
function Asus(){
  return <h1>jhinku</h1>;
}
ReactDOM.render(<Asus/>, document.getElementById('root'));

// USE OF STATE //
class Lappy extends React.Component{//this is a component where methods and functions are declared, nd termed as small divisions in code
  constructor(){//this function is called as soon as the component named "lappy" is initiated
    super();
    this.state = {color:"red",text:"purple"};//In react component, properties like shape& size &color, should be kept in an object called state
  }
  render(){
    return <h2>there are "{2+3}"" apple which are "{this.state.color}"" with "{this.state.text}"" dots</h2>;
  }
}
ReactDOM.render(<Lappy />,document.getElementById('root'));

    // USE of PROPS //
class Lemon extends React.Component{
  render(){ //props are like function arguments, and you can send them into the components as attributes
    return <h2>I am {this.props.color} color</h2>
  }
}
ReactDOM.render(<Lemon color= "yellow"/>, document.getElementById('root'));                                                                                               

// Components in Components //
class Apple extends React.Component{
//super();
render(){
  return (
    <>
    <h1>dsdfsd</h1>
    <h2>dssg</h2>
    <Lappy />
    </>
  );
}
  }
ReactDOM.render(<Apple />, document.getElementById('root'));

//Accesing object properties //
class Car extends React.Component{
  render(){
    return <h1>fuck off {this.props.girl} who wants {this.props.brand.name}</h1>
  }
}
class Eon extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const female="lisa";//declaring a variable
    const male={ name: "Ford", model: "Mustang"}; //declaring an object and later accessing it by sending to Car
   //calling the car class from here
    return (
    <div>
      <h1> hi good toy {this.props.toy}</h1>
      <Car girl={female} boy="tubla" brand={male}/>
    </div>)
  };
}
ReactDOM.render(<Eon toy="rabbit" /> , document.getElementById('root'));

class Bal extends React.Component
{
        state ={
            name: "deba",
            roll: "123",
           dept:this.props.dept
        }
    render(){
        return (
            <h1>hi {this.state.dept}</h1>
        )
    }
}
ReactDOM.render(<Bal dept="cse" /> , document.getElementById('root'));



// STATE  //
//ReactDOM.render(<Human /> , document.getElementById('root'));//The imported component's material is rendered or shown here
