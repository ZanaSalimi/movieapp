import { FETCH_MOVIE, TOP_MOVIES, SEARCH_MOVIE, SEARCH_LIST, LOADING_MOVIE } from './actionTypes'

export const fetchMovie = () => dispatch => {
    fetch(`https://api.themoviedb.org/3/movie/800?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`).then(res=>res.json()).then(data =>{
        dispatch({
            type: FETCH_MOVIE,
            payload: data,
            isLoaded: false
        })
      })
}
export const topMovies = () => dispatch => {
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`).then(res=>res.json()).then(data =>{
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
export const loading = () => dispatch => {
  dispatch({
    type: LOADING_MOVIE,
    isLoaded: true
  })
}