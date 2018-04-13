import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import PlacesList from '../../components/PlacesList/PlacesList';

class FindPlaceScreen extends Component {
  onPlaceSelected = key => {
    const selPlace = this.props.places.find(place => {
      return place.key === key;
    });

    this.props.navigator.push({
      screen: 'amazing-places.PlaceDetailScreen',
      title: selPlace.name,
      // THESE PROPS ARE NOW ADDED TO THE PROPS PASSED TO THE PLACEDETAILSCREEN
      passProps: {
        selectedPlace: selPlace
      }
    })
  }

  render() {
    return (
      <View>
        <PlacesList places={this.props.places} onPlaceSelected={this.onPlaceSelected} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    places: state.places.places
  }
}

export default connect(mapStateToProps)(FindPlaceScreen);