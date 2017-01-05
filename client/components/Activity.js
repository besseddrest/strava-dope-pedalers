import React, { Component } from 'react';

export class Activity extends Component {
  render() {
    const item = this.props.item;
    return (
      <div>
        <div>id: {item.id}</div>
        <div>name: {item.name}</div>
        <div>location: {item.location_city}, {item.location_state}</div>
      </div>
    )
  }
}
