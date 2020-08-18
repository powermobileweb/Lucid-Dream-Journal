import { createStore, combineReducers } from 'redux';
import itemReducer from './app/reducers/itemReducer';

const rootReducer = combineReducers({

  items: itemReducer,
  itemName: itemReducer
});

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;