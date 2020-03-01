import { FETCH_MOVIE, TOP_MOVIES, SEARCH_MOVIE, SEARCH_LIST } from './actionTypes'

export const fetchMovie = (url) => dispatch => {
    fetch(url).then(res=>res.json()).then(data =>{
        dispatch({
            type: FETCH_MOVIE,
            payload: data,
            isLoaded: false
        })
      })
}
export const topMovies = (url) => dispatch => {
    fetch(url).then(res=>res.json()).then(data =>{
        dispatch({
            type: TOP_MOVIES,
            payload: data
        })
      })
}
export const searchMovie = (url, search) => dispatch => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: SEARCH_MOVIE,
        payload: data.results.filter(result => result.title === search )
      })
    })
}
export const searchLists = (url) => dispatch => {
  fetch(url)
  .then(res => res.json())
  .then(data => {
    dispatch({
      type: SEARCH_LIST,
      payload: data.results.map(result => result)
    })
  })
}