import React, { Component } from 'react';
import strava from 'strava-v3';

export default class Single extends Component {
  componentDidMount() {
    strava.activities.get(
      {
        'access_token':'d581f251bdd31949733c0278df7abfa1ee28c6be',
        'id': this.props.params.rideId
      },
      (err, payload) => {
        (!err) ? console.log(payload) : console.log(err)
      }
    )
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.activities !== nextProps.activities) {
      // nextProps.setActivites(nextProps.activities);
      console.log('this: ' + this.props.activities);
      console.log('next: ' + nextProps.activities);
    }
  }

  render() {
    return (
      <div>
        single template
      </div>
    )
  }
}
