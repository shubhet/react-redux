//define initial state
import { ADD_TO_CART,REMOVE_TO_CART } from "../constants";

const initialState = {
  cardData: [],
};
export default function cardItems(state=[], action) {
  switch (action.type) {
    case ADD_TO_CART:
      //console.warn("reducer data",action);
      return [
        ...state,
        {cardData: action.data}
      ]
      case REMOVE_TO_CART:
        //console.warn("reducer data",action);
        state.pop();
        return [
          ...state,
        
        ]
       
      default:
        return state
  }
}
