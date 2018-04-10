import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from '../actions/actionTypes';
import PlaceImage from '../../assets/Place1.png';

const initialState = {
  places: [],
  selectedPlace: null
}

const placesReducer = (oldState = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...oldState,
        places: oldState.places.concat({
          name: action.placeName,
          key: Math.random(),
          image: PlaceImage
        })
      };
    case DELETE_PLACE:
      return {
        ...oldState,
        places: oldState.places.filter((place) => place.key !== oldState.selectedPlace.key),
        selectedPlace: null
      };
    case SELECT_PLACE:
      return {
        ...oldState,
        selectedPlace: oldState.places.find(place => place.key === action.placeKey)
      }
    case DELETE_PLACE:
      return {
        ...oldState,
        selectedPlace: null
      }
    default:
      return oldState;
  }
}

export default placesReducer;