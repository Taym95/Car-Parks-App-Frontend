import {combineReducers} from 'redux';

function parksReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_FINISH':
      return [
        ...action.payload,
        ...state
      ];
    default:
      return state;
  }
}

export default combineReducers({parks: parksReducer});
