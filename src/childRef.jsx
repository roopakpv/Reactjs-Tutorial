import React, { Component } from 'react';

class ChildRef extends Component {
  constructor(){
    super()
    this.state={color:'green'}
  }

  click(){
    document.getElementById("myDiv").style.background='yellow';
    // const node = this.refs.myRef;
    // node.style.background='yellow';
  }
  render() {
    return (
      <div>
        <div style={{background:'gray', width:'100px', display:'inline-block', height:'70px'}} id='myDiv'>
          <h4 >{this.props.myProp}</h4>
        </div>
        <div style={{background:'red', width:'100px', display:'inline-block', height:'70px'}} ref='myRef'>
          <h4 >{this.props.myProp}</h4>
        </div>
        <button onClick={this.click.bind(this)}>Change My Background Color</button>
      </div>
    );
  }
}

export default ChildRef;

