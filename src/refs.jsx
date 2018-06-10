import React, { Component } from 'react';
import ChildRef from './childRef.jsx'

class Refs extends Component {

  componentDidMount(){
    console.log(document.getElementById("a"));
    console.log(this.refs.myRef);
  }
  render() {
    return (
      <div id="a" ref='myRef'>
        <ChildRef myProp='1' id='aa'/>
        <ChildRef myProp='22'/>
        <ChildRef myProp='333'/>
        <p id="a" ref='myRef'></p>
      </div>
    );
  }
}

export default Refs;
