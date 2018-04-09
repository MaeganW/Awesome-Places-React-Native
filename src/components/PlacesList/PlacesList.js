import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ListItem from '../ListItem/ListItem';

const PlacesList = (props) => {
  const placesOutput = props.places.map((place, i) => (
    <ListItem
      key={i}
      placeName={place}
      onItemPressed={() => props.onItemPressed(i)} />
  ));

  return (
    <ScrollView style={styles.placesList}>
      {placesOutput}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  placesList: {
    width: '100%'
  }
})

export default PlacesList;