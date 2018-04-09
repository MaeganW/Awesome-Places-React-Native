import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const PlacesInput = (props) => (
  <View style={styles.container}>
    <TextInput
      style={styles.placeInput}
      value={props.placeName}
      onChangeText={props.onPlaceNameChanged}
      placeholder='An Awesome Place' />
    <Button
      style={styles.placeButton}
      onPress={props.onPlaceSubmitted}
      title='Add' />
  </View>
);

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