import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../style/App.css';
import GoogleMap from 'google-map-react';
import Marker from 'marker';

import {fetchParks} from '../actions/action';

class App extends Component {

  componentWillMount() {
    this.fetchJedi();
  }

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
            apiKey="AIzaSyCJhoRj0yRSw5W0tgbfeGS2W6zXbbimbc0">
            {parks.map((park, index) => (
                <div key={index}>
                  Park: id: {park.id}
                  name: {park.name}
                </div>
            ))}
          <Marker lat={59.955413} lng={30.337844} src={}/>
        </GoogleMap>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {parks: state.parks};
}

export default connect(mapStateToProps)(App);
