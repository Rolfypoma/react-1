import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

function hola(){
  return <p> hola mundo </p>;
}
class mycomponet extends Component{
  render(){
    return <p> hola soy un nuevo componente </p>;
  }
}
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
      < mycomponet/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
