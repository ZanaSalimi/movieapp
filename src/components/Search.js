import React, { Component } from 'react'
import SearchList from './SearchList'

export class Search extends Component {
    state={
        search: '',
        movie: []
    }
    onChange = (e) => {
        this.setState({ search: e.target.value })
        if(this.state.search.length >= 1){
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=8dbc2af9039743bfdabfd4b6e58cedcc&language=en-US&query=${this.state.search}&page=1&include_adult=false`)
            .then(res => res.json())
            .then(data => {
                this.setState({ movie: data})
            })
        }
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.search(this.state.search)
    }
    render() {
        return (
            <div className="ml-auto">
                <form className="form-inline my-2 my-lg-0" onSubmit={this.onSubmit} >
                    <input className="form-control mr-sm-2 searchbar" type="search" name="search" placeholder="Search" aria-label="Search" value={this.state.text} onChange={this.onChange} />
                    <ul className="suggestion-container">
                    <SearchList movie={this.state.movie} />
                    </ul>
                </form>
            </div>
        )
    }
}

export default Search
