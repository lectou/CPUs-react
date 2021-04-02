import { productsAPI } from '../../api/api';
import { SET_LOADER, SET_PRODUCTS } from '../actionsTypes/actionsTypes';

const onLoader = (payload) => ({
  type: SET_LOADER,
  payload,
});

const setPtoducts = (data) => ({ type: SET_PRODUCTS, data })


export const getProductsData = (category, sortBy) => dispatch => {
  dispatch(onLoader(true));
  productsAPI.getProducts(category, sortBy)
    .then((data) => {
      dispatch(setPtoducts(data));
    })
}