import React, { Component, Fragment } from 'react'

export class MoviePoster extends Component {
    render() {
        const mapProps = this.props.topMovies.map(topMovie => 
            <div className="movie-poster" key={topMovie.id}>
                 <div className="poster-pic">
                     <img src={`https://image.tmdb.org/t/p/w500/${topMovie.poster_path}`} alt={topMovie.title} />
                 </div>
                 <div className="movie-txt text-center mt-3">
                     <h4>{topMovie.title}</h4>
                     <p>{topMovie.release_date}</p>
                 </div>
            </div>
        )
        return ( 
        <Fragment>
            {mapProps}
        </Fragment>
        )}
}
/*

             */
export default MoviePoster
