import React, { Component } from 'react';
import strava from 'strava-v3';
import polyline from 'polyline';

export default class Single extends Component {
  componentDidMount() {
    strava.activities.get(
      {
        'access_token':'d581f251bdd31949733c0278df7abfa1ee28c6be',
        'id': this.props.params.rideId
      },
      (err, payload) => {
        (!err) ? this.props.requestComplete(payload) : console.log(err)
      }
    );

    if (this.props.ride.hasOwnProperty('id')) {

    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.ride !== nextProps.ride) {
      nextProps.setRide(nextProps.ride);
    }
  }

  reverseCoords(arr) {
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr.push([arr[i][1], arr[i][0]]);
    }

    return newArr;
  }

  componentDidUpdate() {
    const ride = this.props.ride,
          rawPolyline = ride.map.polyline,
          coords = this.reverseCoords(polyline.decode(rawPolyline)),
          mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

    mapboxgl.accessToken = 'pk.eyJ1IjoiYmVzc2VkZHJlc3QiLCJhIjoiY2l4cGN2d2hrMGFvcTMzbHZsZ3RraTd4YSJ9.ZYdwn5LJY1HhE9IakkM3lg';

    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        center: [ride.start_longitude, ride.start_latitude],
        zoom: 10
    });

    map.on('load', function () {
        map.addLayer({
            "id": "route",
            "type": "line",
            "source": {
                "type": "geojson",
                "data": {
                    "type": "Feature",
                    "properties": {},
                    "geometry": {
                        "type": "LineString",
                        "coordinates": coords
                    }
                }
            },
            "layout": {
                "line-join": "round",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#888",
                "line-width": 5
            }
        });
    });
  }

  render() {
    if (this.props.ride.hasOwnProperty('id')) {
      const ride = this.props.ride;
      return (
        <section className="main main--ride">
          <div className="ride">
            <div id="map" className="ride--map"></div>
            <div>id: {ride.id}</div>
            <div>achievements: {ride.achievement_count}</div>
            <div>distance: {ride.distance}</div>
            <div>name: {ride.name}</div>
            <div>PRs: {ride.pr_count}</div>
          </div>
        </section>
      )
    } else {
      return (
        <div>
          loading ride...
        </div>
      )
    }
  }
}
