import React, { Component } from 'react';
import data from './stuff.js'


class Asychronous extends Component {
    constructor(props)
    {
        super(props);
        this.state={data:''}
        this.content = data;
    }

    componentDidMount(){
        setTimeout(function() { this.setState({data: this.content}); }.bind(this), 3000);
    }
   
  render() {
    if(this.state.data===''){
        return (
        <div>
            <h2>Loading.......</h2>   
        </div>
        );
    }
    else{
        return(
        <div>
            <h2>{this.state.data}</h2>   
        </div>
        )
    }
  }
}

export default Asychronous;
