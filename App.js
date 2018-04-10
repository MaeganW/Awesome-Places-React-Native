import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import PlacesInput from './src/components/PlacesInput/PlacesInput';
import PlacesList from './src/components/PlacesList/PlacesList';
import PlaceImage from './src/assets/Place1.png';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';

export default class App extends Component {
  state = {
    places: [],
    selectedPlace: null
  }

  onPlaceAdded = (place) => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({ name: place, key: Math.random(), image: PlaceImage })
      }
    })
  }

  onPlaceDeleted = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter((place) => place.key !== prevState.selectedPlace.key),
        selectedPlace: null
      }
    })
  }

  onModalClose = () => {
    this.setState({
      selectedPlace: null
    })
  }

  onPlaceSelected = (key) => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => place.key === key)
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.state.selectedPlace}
          onPlaceDeleted={this.onPlaceDeleted}
          onModalClose={this.onModalClose} />
        <PlacesInput onPlaceAdded={this.onPlaceAdded} />
        <PlacesList
          places={this.state.places}
          onPlaceSelected={this.onPlaceSelected} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});
