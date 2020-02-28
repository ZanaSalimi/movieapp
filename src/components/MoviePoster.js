import React, { Component, Fragment } from 'react'

export class MoviePoster extends Component {
    render() {
        console.log(this.props.topMovies)
        return this.props.topMovies.map(movie => {
            return console.log(movie)
        })
    }
}
/*
<Fragment >
                <div className="movie-poster" key={id}>
                     <div className="poster-pic">
                         <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
                     </div>
                     <div className="movie-txt text-center mt-3">
                         <h4>{title}</h4>
                         <p>{release_date}</p>
                     </div>
                </div>
            </Fragment>
             */
export default MoviePoster
