// Main is really just a presentational component
import React from 'react';
import {Link} from 'react-router';

// {React.cloneElement(this.props.children, this.props)}:
// - passes down props from Main to its first child
const Main = React.createClass({
  render() {
    return (
      <section className="main-wrapper">
        <aside className="sidebar">
          <header className="sidebar--header">
            <Link to="/"><h1>Strava App</h1></Link>
          </header>
        </aside>
        {React.cloneElement(this.props.children, this.props)}
      </section>
    )
  }
});

export default Main;
