import { combineReducers } from 'redux'
import fetchMovie from './fetchMovie'
import searchList from './searchList'
/*import loading from './loading'*/
export default combineReducers({
    Movies: fetchMovie,
    searchList
})