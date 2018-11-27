import React, { Component } from 'react';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      errMSg:false
    }
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
      errMSg: false
    });
  }

  decrement = () => {
    if(this.state.counter === 0) {
      this.setState({
        errMSg: true
      });
      return;
    }
    this.setState({
      counter: this.state.counter - 1,
      errMSg: false
    });
  }

  render() {
    const {counter, errMSg} = this.state;
    return (
        <div data-test="component-app">
            <h1 data-test="counter-display">The counter is {counter}</h1>
            <button data-test="increment-button" onClick={this.increment}>Increment counter</button>
            <button data-test="decrement-button" onClick={this.decrement}>Decrement counter</button>
            {errMSg ? <p style={{color:'red'}}>Counter can't be less than 0</p> : ''}
        </div>
    );
  }
}

export default App ;
