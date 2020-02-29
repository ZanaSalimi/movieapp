import { FETCH_MOVIE, TOP_MOVIES } from './actionTypes'

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