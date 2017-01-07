import React, { Component } from 'react';

export default class Activity extends Component {
  handleClick(e) {
    e.nativeEvent.stopImmediatePropagation();
    this.props.selectActivity();
  }
  render() {
    const { activity, i } = this.props;
    return (
      <section onClick={this.props.selectActivity.bind(null, i)} className="activity">
        <div>id: {activity.id}</div>
        <div>name: {activity.name}</div>
        <div>location: {activity.location_city}, {activity.location_state}</div>
      </section>
    )
  }
}
