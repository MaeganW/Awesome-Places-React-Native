import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ListItem from '../ListItem/ListItem';

const PlacesList = (props) => {
  return (
    <FlatList
      style={styles.placesList}
      data={props.places}
      renderItem={(info) => (
        <ListItem
          placeName={info.item.name}
          placeImage={info.item.image}
          onPlaceSelected={() => props.onPlaceSelected(info.item.key)} />
      )}
    />
  );
}

const styles = StyleSheet.create({
  placesList: {
    width: '100%'
  }
})

export default PlacesList;