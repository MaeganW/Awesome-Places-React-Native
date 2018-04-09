import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import PlacesInput from './src/components/PlacesInput/PlacesInput';
import PlacesList from './src/components/PlacesList/PlacesList';

export default class App extends Component {
  state = {
    placeName: '',
    places: []
  }

  onPlaceNameChanged = (val) => {
    this.setState({
      placeName: val
    })
  }

  onPlaceSubmitted = () => {
    if (this.state.placeName.trim() === '') {
      return;
    }

    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      }
    })
  }

  onItemPressed = (index) => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter((place, i) => i !== index)
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <PlacesInput
            onPlaceNameChanged={this.onPlaceNameChanged}
            onPlaceSubmitted={this.onPlaceSubmitted}
            placeName={this.state.placeName} />
        </View>
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
  },
  inputContainer: {
    width: '100%'
  },
  listContainer: {
    width: '100%'
  }
});
