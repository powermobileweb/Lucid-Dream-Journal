import { ADD_ITEM, DELETE_ITEM } from './actions';

export const addItem = itemName => {
  return {
    type: ADD_ITEM,
    payload: itemName
  }
}

export const deleteItem = itemName => {
    return {
      type: DELETE_ITEM,
      payload: itemName
    }
  }