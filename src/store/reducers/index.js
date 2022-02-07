import { combineReducers } from "redux";
import{REQUEST_POST, RECEIVED_POST, FAILED_REQUEST} from '../actions'

const INITIAL_STATE = {
  loading: false,
  data: [],
  subreddit: ''
}

function reeditReducer (state=INITIAL_STATE, action) {
  switch(action.type) {
    case REQUEST_POST:
      return {...state, loading: true, subreddit: action.subreddit};
    case RECEIVED_POST:
      return {...state, loading: false, data: action.data};
    case FAILED_REQUEST:
      return {...state, loading: false, error: action.error};
    default:
      return state;
  }
}

const rootReducer = combineReducers({reeditReducer});
export default rootReducer;

