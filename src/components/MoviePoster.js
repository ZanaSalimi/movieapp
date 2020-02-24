import React, { Component } from 'react'
import { Fragment } from 'react';
export class MoviePoster extends Component {
    render() {
        return this.props.topmovies.map(movie => {
            return <Fragment key={movie.id}>
                <div className="movie-poster">
                     <div className="poster-pic">
                         <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                     </div>
                     <div className="movie-txt text-center mt-3">
                         <h4>{movie.title}</h4>
                         <p>{movie.release_date}</p>
                     </div>
                </div>
            </Fragment>
        })
    }
}

export default MoviePoster
