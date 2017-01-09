import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Activity extends Component {
  handleClick(e) {
    e.nativeEvent.stopImmediatePropagation();
    this.props.selectActivity();
  }
  render() {
    const { activity, activeCard, i } = this.props;
    const classes = (i == activeCard.index) ? 'activity activity__active' : 'activity';
    const date = new Date(Date.parse(activity.start_date_local));
    const humanDate = date.toDateString();
    return (
      <section onClick={this.props.selectActivity.bind(null, i, activity)} className={classes}>
        <div className="activity--date">{humanDate}</div>
        <div className="activity--name">{activity.name}</div>
        <div className="activity--id">{activity.id}</div>
        <div className="activity--location">{activity.location_city}, {activity.location_state}</div>
        <Link className="activity--link" to={`/activity/${activity.id}`}>see more</Link>
      </section>
    )
  }
}
