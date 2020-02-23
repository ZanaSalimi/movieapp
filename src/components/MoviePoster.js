import React, { Component } from 'react'
import Terminator from '../img/Terminator.jpg'
export class MoviePoster extends Component {
    render() {
        return (
            <div className="movie-poster">
                <div className="poster-pic">
                    <img src={Terminator} alt={Terminator} />
                </div>
                <div className="movie-txt text-center mt-3">
                    <h4>Terminator</h4>
                    <p>30,September,2019</p>
                </div>
            </div>
        )
    }
}

export default MoviePoster
