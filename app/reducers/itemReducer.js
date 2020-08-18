import { ADD_ITEM, DELETE_ITEM } from "../actions/actions";

const initialState = {
  itemName: "",
  items: []
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: state.items.concat({
          key: Math.random(),
          value: action.payload
        })
      };

    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(i => i.itemName !== action.payload.itemName),
      };

    default:
      return state;
  }
};

export default itemReducer;
