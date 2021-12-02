import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const danitoLocation = "44.85793496014359, 20.65446818663503";

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 44.857828486628186,
      lng: 20.65438235570891,
    },
    zoom: 7,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBGbr3geNu5sybgxUBkRRytzBD_t_ztQxQ" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
