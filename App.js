import { Navigation } from 'react-native-navigation';
import AuthScreen from './src/screens/Auth/Auth';

// need to Register Screens
Navigation.registerComponent("amazing-places.AuthScreen", () => AuthScreen);

// Start an app for react native navigation
Navigation.startSingleScreenApp({
  screen: {
    screen: "amazing-places.AuthScreen",
    title: "Login"
  }
});






// ==== CODE BEFORE ADDING REACT-NATIVE-NAVIGATION ==== //

// import React, { Component } from 'react';
// import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
// import { connect } from 'react-redux';

// import PlacesInput from './src/components/PlacesInput/PlacesInput';
// import PlacesList from './src/components/PlacesList/PlacesList';
// import PlaceImage from './src/assets/Place1.png';
// import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
// import { addPlace, deletePlace, selectPlace, deselectPlace } from './src/store/actions/root.actions';

// class App extends Component {
//   // state = {
//   //   places: [],
//   //   selectedPlace: null
//   // }

//   onPlaceAdded = (placeName) => {
//     this.props.onAddPlace(placeName);
//     console.log('Place added!!!')
//     // this.setState(prevState => {
//     //   return {
//     //     places: prevState.places.concat({ name: placeName, key: Math.random(), image: PlaceImage })
//     //   }
//     // })
//   }

//   onPlaceDeleted = () => {
//     this.props.onDeletePlace();
//     // this.setState(prevState => {
//     //   return {
//     //     places: prevState.places.filter((place) => place.key !== prevState.selectedPlace.key),
//     //     selectedPlace: null
//     //   }
//     // })
//   }

//   onModalClose = () => {
//     this.props.onDeselectPlace();
//     // this.setState({
//     //   selectedPlace: null
//     // })
//   }

//   onPlaceSelected = (key) => {
//     this.props.onSelectPlace(key);
//     // this.setState(prevState => {
//     //   return {
//     //     selectedPlace: prevState.places.find(place => place.key === key)
//     //   }
//     // })
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <PlaceDetail
//           selectedPlace={this.props.selectedPlace}
//           onPlaceDeleted={this.onPlaceDeleted}
//           onModalClose={this.onModalClose} />
//         <PlacesInput onPlaceAdded={this.onPlaceAdded} />
//         <PlacesList
//           places={this.props.places}
//           onPlaceSelected={this.onPlaceSelected} />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//   }
// });

// const mapStateToProps = state => {
//   return {
//     places: state.places.places,
//     selectedPlace: state.places.selectedPlace
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     onAddPlace: (placeName) => dispatch(addPlace(placeName)),
//     onDeletePlace: () => dispatch(deletePlace()),
//     onSelectPlace: (placeKey) => dispatch(selectPlace(placeKey)),
//     onDeselectPlace: () => dispatch(deselectPlace())
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);
