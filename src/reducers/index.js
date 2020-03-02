import { combineReducers } from 'redux'
import fetchMovie from './fetchMovie'
import topMovies from './topMovies'
import searchList from './searchList'
import loading from './loading'
export default combineReducers({
    fetchMovie,
    topMovies,
    searchList,
    loading
})