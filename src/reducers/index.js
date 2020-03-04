import { combineReducers } from 'redux'
import fetchMovie from './fetchMovie'
export default combineReducers({
    Movies: fetchMovie
})