import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk'
import { productsReducer } from './productsStore/productsReducer';
import { userReducer } from './userStore/userReducer';
import { cartReducer } from './cartStore/cartReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
  productsModule: productsReducer,
  userModule: userReducer,
  cartModule: cartReducer

})

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))