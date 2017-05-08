import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../style/App.css';
import GoogleMap from 'google-map-react';
import Marker from './marker';
import {fetchParks} from '../actions/action';

class App extends Component {

  componentWillMount() {
    this.fetchJedi();
  }

    static defaultProps = {
        center: [59.938043, 30.337157],
        zoom: 9,
        greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
    };

    fetchJedi() {
    this
      .props
      .dispatch(fetchParks());
  }

  render() {
    const {parks} = this.props;
    return (
      <div>
        <GoogleMap
            apiKey={YOUR_GOOGLE_MAP_API_KEY}
            center={this.props.center}
            zoom={this.props.zoom}>
            {parks.map((park, index) => (
                  <Marker key={index} lat={park.lat} lng={park.lng} name={park.name}/>
            ))}
        </GoogleMap>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {parks: state.parks};
}

export default connect(mapStateToProps)(App);
