import { actionTypes } from '../actions';

const reducer = (
  state: undefined | boolean = false,
  action: { type: string }
) => {
  switch (action.type) {
    case actionTypes.CORRECT_GUESS:
      return true;
    default:
      return state;
  }
};

export default reducer;
