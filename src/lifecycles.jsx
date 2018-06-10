import React, { Component } from 'react';


class LifeCycles extends Component {
    constructor(props)
    {
        super(props);
        this.state={myState:'myState'}
    }
    componentWillMount(){
        console.log('componentWillMount')
        console.log(`Current Time is`)
        console.log(Date.now())
    }
    componentDidMount(){
        console.log('componentDidMount')
        console.log(`Current Time is`)
        console.log(Date.now())
    }
    componentWillUpdate(){
        console.log('componentWillUpdate')
        console.log(`Current Time is`)
        console.log(Date.now())
    }
    componentDidUpdate(){
        console.log('componentDidUpdate')
        console.log(`Current Time is`)
        console.log(Date.now())
    }
    shouldComponentUpdate(){
        // return true;
    }
  render() {
    return (
      <div>
        <h2>Please Visit My console</h2>  
        <h3>Current Time is</h3>
        <h3>{Date.now()}</h3>
<h1>{this.state.myState}</h1>
        <button onClick={()=>this.setState({myState:'changing state to something else'})}>Change my state</button>
      </div>
    );
  }
}

export default LifeCycles;
