import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchMovie, fetchAPI, loading } from '../actions'
export class Search extends Component {
    state={
        search: '',
        options: []
    }
    onChange = (e) => {
        this.setState({ search: e.target.value })
        if(this.state.search.length >= 1){
            this.props.searchMovie(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${this.state.search}&page=1&include_adult=false`)
            
        }
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.setState({ search: ''})
    }
    movieSelect = (e) => {
        this.setState({ search: e.target.value })
        this.props.loading()
        /*setTimeout(() => {
            
        }, 100);*/
        this.props.fetchAPI(`https://api.themoviedb.org/3/movie/${e.target.id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
        console.log(e.target.id)
    }
    movieNames = () => {
        if(this.props.Movies.searchMovies.length === 0){
               return ''
            }
        else{
            return this.props.Movies.searchMovies.map(item => 
            <option key={item.id} className="d-block suggestion" id={item.id} onClick={this.movieSelect}>{item.name}</option>
                )
        }
        }
    render() {
        return (
            <div className="ml-auto d-inline-block">
                <form className="form-inline my-2 my-lg-0" autoComplete="off" onSubmit={this.onSubmit} >
                    <input className="form-control mr-sm-2 searchbar" type="search" name="search" placeholder="Search" aria-label="Search" value={this.state.search} onChange={this.onChange} />
                </form>
                <div className="suggestions">
                    {this.movieNames()}
                    </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return state
}
export default connect(mapStateToProps, { searchMovie, fetchAPI, loading })(Search)