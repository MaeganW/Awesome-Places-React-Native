import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

class PlacesInput extends Component {
  state = {
    placeName: ''
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
    //emits up to the parent
    this.props.onPlaceAdded(this.state.placeName);
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.placeInput}
          value={this.state.placeName}
          onChangeText={this.onPlaceNameChanged}
          placeholder='An Awesome Place' />
        <Button
          style={styles.placeButton}
          onPress={this.onPlaceSubmitted}
          title='Add' />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '30%'
  }
});

export default PlacesInput;