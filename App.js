import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import PlacesInput from './src/components/PlacesInput/PlacesInput';
import PlacesList from './src/components/PlacesList/PlacesList';
import PlaceImage from './src/assets/Place1.png'

export default class App extends Component {
  state = {
    places: []
  }

  onPlaceAdded = (place) => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({ name: place, key: Math.random(), image: PlaceImage })
      }
    })
  }

  onItemPressed = (key) => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter((place) => place.key !== key)
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <PlacesInput onPlaceAdded={this.onPlaceAdded} />
        <PlacesList
          places={this.state.places}
          onItemPressed={this.onItemPressed} />
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
