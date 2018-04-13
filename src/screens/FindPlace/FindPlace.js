import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import PlacesList from '../../components/PlacesList/PlacesList';

class FindPlaceScreen extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = event => {
    console.log(event);
    if (event.type === "NavBarButtonPress") {
      if (event.id === "sideDrawerToggle") {
        this.props.navigator.toggleDrawer({
          side: "left"
        })
      }
    }
  }

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