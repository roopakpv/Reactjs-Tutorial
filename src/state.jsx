import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  click(){
    this.setState(
      {
        counter:this.state.counter+1
      }
    )
  }
  render() {
    return (
      <div>
        Counter value: {this.state.counter}
        <br/>
        <br/>
        <br/>
        <button onClick={this.click.bind(this)} >Add Counter</button>
      </div>
    );
  }
} 

export default Counter;