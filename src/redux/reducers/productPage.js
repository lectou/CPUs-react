import { SET_LOADER, SET_PRODUCT, CLEAR_DATA, NEW_COMMENT } from '../actionsTypes/actionsTypes';

const initialState = {
  id: null,
  image: null,
  name: null,
  price: null,
  specifications: {},
  rating: null,
  comments: [],
  isLoaded: false
};


const productPage = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT: {
      const { id, imageURL, name, specifications, price, rating, comments } = action.product
      return {
        ...state,
        id: id,
        image: imageURL,
        name: name,
        price: price,
        specifications: { ...specifications },
        rating: rating,
        comments: [...comments],
        isLoaded: false
      };
    }
    case CLEAR_DATA:
      return {
        ...state,
        id: null,
        image: null,
        name: null,
        price: null,
        specifications: {},
        rating: null,
        comments: [],
        // isLoaded: true
      };
    case SET_LOADER:
      return {
        ...state,
        isLoaded: action.payload,
      };
    case NEW_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.comment],
      };

    default:
      return state;
  }
}

export default productPage;