import React, { Component } from 'react'
import MoviePoster from './MoviePoster'
export class TopMovies extends Component {
    render() {
        return (
            <div className="top-movies">
                <h2 className="top-movies-head my-3">Top Movies</h2>
                <div className="d-flex top-movies-poster">
                    <MoviePoster />
                    <MoviePoster />
                    <MoviePoster />
                    <MoviePoster />
                </div>
            </div>
        )
    }
}

export default TopMovies
