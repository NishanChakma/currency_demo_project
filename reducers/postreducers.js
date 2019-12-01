import {DETAILS_POST} from '../actions/type';

const initialState = {
  data: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case DETAILS_POST:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}
