import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      counter: 0
    }
  }

  decrement = () => {
    let contador = this.state.counter;
    if(contador <= 0){
      alert('No se puede ir abajo de cero')
    } else {
      this.setState({ 
        counter: this.state.counter - 1 
      })
    }
  }

  render(){
    return (
      <div data-test="component-app" className="App">
        <h1 data-test="counter-display">The counter is currently {this.state.counter}</h1>
        <button 
          data-test="increment-button"
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >INCREMENT BUTTON</button>
        <button 
          data-test="decrement-button"
          onClick={this.decrement}
        >DECREMENT BUTTON</button>
      </div>
    );
  }
};

export default App;
