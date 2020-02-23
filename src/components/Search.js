import React, { Component } from 'react'

export class Search extends Component {
    state={
        search: '',
        options: []
    }
    onChange = (e) => {
        this.setState({ search: e.target.value })
        if(this.state.search.length >= 1){
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=8dbc2af9039743bfdabfd4b6e58cedcc&language=en-US&query=${this.state.search}&page=1&include_adult=false`)
            .then(res => res.json())
            .then(data => {
                this.setState({ options: data.results.map(movie => movie.title) })
            })
        }
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.search(this.state.search)
    }
    movieSelect = (e) => {
        this.setState({ search: e.target.value })
    }
    movieNames = () => {
        if(this.state.search !== ''){
            return this.state.options.map(name=> (
                <option className="d-block suggestion" onClick={this.movieSelect}>{name}</option>
            ))
        }
        else{
            return''
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

export default Search