import { combineReducers } from 'redux';

import productions from './productions';
import filters from './filters';
import cart from './cart';
import productPage from './productPage';

const rootReducer = combineReducers({
  productions,
  filters,
  cart,
  productPage
});

export default rootReducer;