import { FETCH_MOVIE, TOP_MOVIES, SEARCH_MOVIE, LOADING } from './actionTypes'

export const fetchAPI = (url) => async (dispatch) => {
    const e = await fetch(url)
    const res = await e.json()
    const data = res
    dispatch({
      type: FETCH_MOVIE,
      payload: data
  })
    const e2 = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
    const res2 = await e2.json()
    const data2 = res2
    dispatch({
      type: TOP_MOVIES,
      payload: data2
    })
}
export const searchMovie = (search) => dispatch => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${search}&page=1&include_adult=false`)
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: SEARCH_MOVIE,
        payload: data.results
      })
    })
}
export const loading = () => dispatch => {
  dispatch({
    type: LOADING
  })
}