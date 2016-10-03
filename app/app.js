var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;

// All the routes
var routes = require('./config/routes');

// Render the ccontents according to the routes page.
ReactDOM.render(
  
  <Router>{routes}</Router>,
  document.getElementById('app')

);
