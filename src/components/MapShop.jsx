import { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={10}
        initialCenter={{
          lat: 16.057277,
          lng: 108.21607,
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBlILF1CQQmjtsT1WlD-nRS_5J4fe4lrxM",
})(MapContainer);
