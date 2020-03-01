import { combineReducers } from 'redux'
import fetchMovie from './fetchMovie'
import topMovies from './topMovies'
import searchList from './searchList'
export default combineReducers({
    fetchMovie,
    topMovies,
    searchList
})