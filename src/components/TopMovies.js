import React, { Component } from 'react'
import MoviePoster from './MoviePoster'
import {
    Icon
  } from 'semantic-ui-react';
export class TopMovies extends Component {
    constructor(props){
        super(props);
        
        this.state={
            topmovies: [],
            x: 0
        }
    }
    UNSAFE_componentWillMount(){
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=8dbc2af9039743bfdabfd4b6e58cedcc&language=en-US&page=1`)
        .then(res => res.json())
        .then(data => this.setState({ topmovies: data.results }))
    }
    goLeft = () => {
        this.setState({x: this.state.x + 100})
        if(this.state.x===0){
            this.setState({x: 0})
            }
    }
    goRight = () => {
        this.setState({x: this.state.x - 100})
        if(this.state.x===-400){
            this.setState({x: 0})
        }
        }
    render() {
        return (
            <div className="top-movies">
                <div className="top-movies-head my-5">
                    <h2 className="">Top Movies</h2>
                    <button className="slide-btn" onClick={this.goLeft}>
                    <Icon name='chevron left' size="large" />
                        </button>
                    <button className="slide-btn" onClick={this.goRight}>
                    <Icon name='chevron right' size="large" />
                    </button> 
                </div>

                <div className="d-flex top-movies-poster" style={{transform: `translateX(${this.state.x}%)`}}>
                        <MoviePoster topmovies={this.state.topmovies} />
                </div>

            </div>
        )
    }
}

export default TopMovies