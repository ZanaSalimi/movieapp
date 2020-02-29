import { FETCH_MOVIE, TOP_MOVIES, SEARCH_MOVIE } from './actionTypes'
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
export const searchMovie = (search) => dispatch => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${search}&page=1&include_adult=false`)
    .then(res => res.json())
    .then(data => {
      data.results.map(result => {
        if(search === result.title){
          fetch(`https://api.themoviedb.org/3/movie/${result.id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
          .then(res => res.json())
          .then(data => 
            dispatch({
                type: SEARCH_MOVIE,
                payload: data
            })
            )
        }
      })
    })
}