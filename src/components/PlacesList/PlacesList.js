import React from 'react';
import { View, StyleSheet } from 'react-native';
import ListItem from '../ListItem/ListItem';

const PlacesList = (props) => {
  const placesOutput = props.places.map((place, i) => (
    <ListItem
      key={i}
      placeName={place}
      onItemPressed={() => alert('Item ' + i)} />
  ));

  return (
    <View style={styles.placesList}>
      {placesOutput}
    </View>
  );
}

const styles = StyleSheet.create({
  placesList: {
    width: '100%'
  }
})

export default PlacesList;