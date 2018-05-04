import React, { Component } from 'react';

class GoogleMap extends Component {
  // lifecycle method after Component render
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon,
      },
    });
  }
  render() {
    return (
      // this dev will embed our map
      <div ref="map" />
    );
  }
}

export default GoogleMap;
