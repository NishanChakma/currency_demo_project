import {combineReducers} from 'redux';
import PostReducer from './postreducers'

export default combineReducers({
    posts:PostReducer,
})