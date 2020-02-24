import React, { Component } from 'react'
import MoviePoster from './MoviePoster'
export class TopMovies extends Component {
    constructor(props){
        super(props);
        
        this.state={
            topmovies: []
        }
    }
    UNSAFE_componentWillMount(){
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=8dbc2af9039743bfdabfd4b6e58cedcc&language=en-US&page=1`)
        .then(res => res.json())
        .then(data => this.setState({ topmovies: data.results }))
    }
    render() {
        return (
            <div className="top-movies">
                <h2 className="top-movies-head my-3">Top Movies</h2>
                <div className="d-flex top-movies-poster">
                        <MoviePoster topmovies={this.state.topmovies} />
                </div>
            </div>
        )
    }
}

export default TopMovies