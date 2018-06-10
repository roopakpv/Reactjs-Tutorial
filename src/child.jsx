import React, { Component } from 'react';

class Child extends Component {
  render() {
    return (
      <div>
        <h3>I am a Child Component</h3>
        <h4>{this.props.myProp}</h4>
      </div>
    );
  }
}

export default Child;

