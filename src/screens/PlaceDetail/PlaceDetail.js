import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, Button, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { deletePlace } from '../../store/actions/places.actions';

class PlaceDetail extends Component {
  onPlaceDeleted = () => {
    this.props.onDeletePlace(this.props.selectedPlace.key)
    this.props.navigator.pop()
  }

  render() {
    return (
      <View style={styles.container} >
        <Image style={styles.placeImage} source={this.props.selectedPlace.image} />
        <Text style={styles.placeName} >{this.props.selectedPlace.name}</Text>
        <View>
          <TouchableOpacity onPress={this.onPlaceDeleted}>
            <View style={styles.deleteButton}>
              <Icon name='ios-trash' color='red' size={35} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
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

const mapDispatchToProps = dispatch => {
  return {
    onDeletePlace: key => dispatch(deletePlace(key))
  }
}

export default connect(null, mapDispatchToProps)(PlaceDetail);