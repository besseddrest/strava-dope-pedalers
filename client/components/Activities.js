import React, { Component } from 'react';
import Activity from './Activity';
import strava from 'strava-v3';

export default class Activities extends Component {
  componentDidMount() {
    strava.athlete.listActivities(
      {
        'access_token':'d581f251bdd31949733c0278df7abfa1ee28c6be'
      },
      (err, payload) => {
        (!err) ? this.props.requestComplete(payload) : console.log(err)
      }
    )
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.activities !== nextProps.activities) {
      nextProps.setActivites(nextProps.activities);
    }
  }

  render() {
    let results = 'loading...';
    if (this.props.activities.length !== 0) {
      results = this.props.activities.map((activity, i) => <Activity {...this.props} i={i} key={i} activity={activity} />);
    }

    return (
      <section className="main main--activities">
        { results }
      </section>
    )
  }
}
