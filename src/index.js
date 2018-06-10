import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, IndexLink, Link, browserHistory } from 'react-router';
import Home from './home'
import Parent from './Parent'
import LifeCycles from './lifecycles'
import Asychronous from './Asychronous'
import ReactRouter from './router'
import Refs from './refs'
import Counter from './state'
import { Stuff, StuffIWant } from './stuff'
import Contact from './contact'
import './index.css';

var destination = document.querySelector("#container");

class App extends Component{
  render() {
    return (
      <div>
        <h1>Create React App with React Router in ES6</h1>
        <ul className="header">
          <li> <IndexLink to="/" activeClassName="active"> Home </IndexLink> </li>
          <li> <Link to="/Parent" activeClassName="active"> Parent / Child </Link> </li>
          <li> <Link to="/state" activeClassName="active"> State </Link> </li>
          <li> <Link to="/lifecycles" activeClassName="active"> LifeCycles </Link> </li>
          <li> <Link to="/asychronous" activeClassName="active"> Asychronous </Link> </li>
          <li> <Link to="/refs" activeClassName="active"> Refs </Link> </li>
          {/* <li> <Link to="/router" activeClassName="active"> Router </Link> </li> */}
        </ul>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="parent" component={Parent} />
      <Route path="lifecycles" component={LifeCycles} />
      <Route path="Asychronous" component={Asychronous} />
      <Route path="state" component={Counter} />
      <Route path="refs" component={Refs} />
      <Route path="router" component={ReactRouter} />
    </Route>
  </Router>,
  destination
);
