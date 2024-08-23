import { createStore, combineReducers } from 'redux';
import productreducer from './productreducer';

const rootReducer = combineReducers({
  products: productreducer,
});

const store = createStore(rootReducer);

export default store;
