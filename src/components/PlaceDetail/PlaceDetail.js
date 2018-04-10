import React from 'react';
import { Modal, Text, Button, View, Image, StyleSheet } from 'react-native';

const PlaceDetail = props => {
  let modalContent = null;

  if (props.selectedPlace) {
    modalContent = (
      <View>
        <Image style={styles.placeImage} source={props.selectedPlace.image} />
        <Text style={styles.placeName} >{props.selectedPlace.name}</Text>
      </View>
    );
  }

  return (
    <Modal
      visible={props.selectedPlace !== null}
      animationType='slide'
      onRequestClose={props.onModalClose} >
      <View style={styles.modalContainer} >
        {modalContent}
        <View>
          <Button title='Delete' color='red' onPress={props.onPlaceDeleted} />
          <Button title='Close' onPress={props.onModalClose} />
        </View>
      </View>
    </Modal>
  )
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22
  },
  placeImage: {
    width: '100%',
    height: 200
  },
  placeName: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 28
  }
})

export default PlaceDetail;