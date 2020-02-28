import { combineReducers } from 'redux'
import fetchMovie from './fetchMovie'
import topMovies from './topMovies'
export default combineReducers({
    fetchMovie,
    topMovies
})