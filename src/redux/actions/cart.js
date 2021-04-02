import {
  SET_PRODUCT_CART, PLUS_CART_ITEM, MINUS_CART_ITEM, DELETE_CART_ITEM,
  DELETE_ALL_ITEMS
} from '../actionsTypes/actionsTypes';

export const setProductToCart = (obj) => ({ type: SET_PRODUCT_CART, obj });
export const plusCartItem = (id) => ({ type: PLUS_CART_ITEM, id });
export const minusCartItem = (id) => ({ type: MINUS_CART_ITEM, id });
export const deleteCartItem = (id) => ({ type: DELETE_CART_ITEM, id });
export const deleteAllItems = () => ({ type: DELETE_ALL_ITEMS })