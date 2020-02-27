import { INCREMENT, DECREMENT } from "../const/actionTypes";

const initState = {
  counter: 0
};

const counterReducer = (state = initState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { counter: state.counter + 1 };
    case DECREMENT:
      return { counter: state.counter > 0 ? state.counter - 1 : 0 };
    default:
      return state;
  }
};
export default counterReducer
