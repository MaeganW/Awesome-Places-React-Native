import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import PlacesInput from '../../components/PlacesInput/PlacesInput';
import { addPlace } from '../../store/actions/root.actions';

class SharePlaceScreen extends Component {
  onPlaceAdded = (placeName) => {
    this.props.onAddPlace(placeName);
  };

  render() {
    return (
      <View>
        <PlacesInput onPlaceAdded={this.onPlaceAdded} />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (placeName) => dispatch(addPlace(placeName))
  }
}

// first arg is mapStateToProps which isn't needed here
export default connect(null, mapDispatchToProps)(SharePlaceScreen);