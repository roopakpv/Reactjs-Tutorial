import React, { Component } from 'react';

class Router extends Component {

    constructor(){
        super()
            this.content=`<Router history={browserHistory}>

                                <Route path="/" component={Home}>

                            </Router>`;
    }
  render() {
    return (
      <div>
        <h3>
            {this.content}
        </h3>
      </div>
    );
  }
}

export default Router;
