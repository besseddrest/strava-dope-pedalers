// Main is really just a presentational component
import React from 'react';
import {Link} from 'react-router';


// {React.cloneElement(this.props.children, this.props)}:
// - passes down props from Main to its first child
const Main = React.createClass({
  getInitialState() {
    var strava = require('strava-v3');
    strava.athlete.get({'access_token':'d581f251bdd31949733c0278df7abfa1ee28c6be'},function(err,payload) {
        if(!err) {
            console.log(payload);
        }
        else {
            console.log(err);
        }
    });

    return null;
  },

  render() {
    return (
      <div>
        <header className="header">
          <h1>Strava App</h1>
        </header>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
});

export default Main;
