import React, { Component } from 'react';
import Child from './child.jsx'

class Parent extends Component {
  render() {
    return (
      <div>
        <h2>I am a Parent Component</h2>
        <Child myProp='Hi i am a prop'/>
      </div>
    );
  }
}

export default Parent;
