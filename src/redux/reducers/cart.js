import {
  SET_PRODUCT_CART, DELETE_CART_ITEM,
  PLUS_CART_ITEM, MINUS_CART_ITEM, DELETE_ALL_ITEMS
} from '../actionsTypes/actionsTypes';

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getPrice = (arr) => arr.reduce((sum, el) => sum + el.price, 0);

const getTotalPrice = (obj) => Object.values(obj).reduce((sum, el) => sum + el.totalPrice, 0);
const getTotalCount = (obj) => Object.values(obj).reduce((sum, el) => sum + el.items.length, 0);

const cart = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT_CART: {

      //create new object
      const currentProduct = !state.items[action.obj.id]
        ? [action.obj]
        : [...state.items[action.obj.id].items, action.obj];

      // create new key
      const newItems = {
        ...state.items,
        [action.obj.id]: {
          items: currentProduct,
          totalPrice: getPrice(currentProduct)
        }
      };

      const totalCount = getTotalCount(newItems);
      const totalPrice = getTotalPrice(newItems);

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };

    }
    case PLUS_CART_ITEM: {
      const newObjItems = [
        ...state.items[action.id].items,
        state.items[action.id].items[0],
      ];
      const newItems = {
        ...state.items,
        [action.id]: {
          items: newObjItems,
          totalPrice: getPrice(newObjItems),
        },
      };
      const totalCount = getTotalCount(newItems);
      const totalPrice = getTotalPrice(newItems);
      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      }
    }
    case MINUS_CART_ITEM: {

      const oldItems = state.items[action.id].items;
      const newObjItems =
        oldItems.length > 1 ? state.items[action.id].items.slice(1) : oldItems;
      const newItems = {
        ...state.items,
        [action.id]: {
          items: newObjItems,
          totalPrice: getPrice(newObjItems),
        },
      };

      const totalCount = getTotalCount(newItems);
      const totalPrice = getTotalPrice(newItems);

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }
    case DELETE_CART_ITEM: {
      const newItems = {
        ...state.items,
      };
      const currentTotalPrice = newItems[action.id].totalPrice;
      const currentTotalCount = newItems[action.id].items.length;

      delete newItems[action.id];
      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount,
      };

    }
    case DELETE_ALL_ITEMS:
      return { totalPrice: 0, totalCount: 0, items: {} }
    default:
      return state;
  }
}

export default cart;