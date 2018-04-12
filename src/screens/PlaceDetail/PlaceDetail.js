import React from 'react';
// import { Modal, Text, Button, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Button, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const PlaceDetail = props => {
  // let modalContent = null;

  // if (props.selectedPlace) {
  //   modalContent = (
  //     <View>
  //       <Image style={styles.placeImage} source={props.selectedPlace.image} />
  //       <Text style={styles.placeName} >{props.selectedPlace.name}</Text>
  //     </View>
  //   );
  // }

  return (
    // <Modal
    //   visible={props.selectedPlace !== null}
    //   animationType='slide'
    //   onRequestClose={props.onModalClose} >
    <View style={styles.container} >
      <Image style={styles.placeImage} source={props.selectedPlace.image} />
      <Text style={styles.placeName} >{props.selectedPlace.name}</Text>
      {/* {modalContent} */}
      <View>
        <TouchableOpacity onPress={props.onPlaceDeleted}>
          <View style={styles.deleteButton}>
            <Icon name='ios-trash' color='red' size={35} />
          </View>
        </TouchableOpacity>
        {/* <Button title='Close' onPress={props.onModalClose} /> */}
      </View>
    </View>
    // </Modal>
  )
};

const styles = StyleSheet.create({
  container: {
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
  },
  deleteButton: {
    alignItems: 'center',
    backgroundColor: '#fff'
  }
})

export default PlaceDetail;