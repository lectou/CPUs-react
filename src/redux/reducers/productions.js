import { SET_LOADER, SET_PRODUCTS } from '../actionsTypes/actionsTypes';

const initialState = {
  items: [],
  isLoaded: false,
};

const productions = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        items: action.data,
        isLoaded: false,
      };

    case SET_LOADER:
      return {
        ...state,
        isLoaded: action.payload,
      };

    default:
      return state;
  }
}
export default productions;
