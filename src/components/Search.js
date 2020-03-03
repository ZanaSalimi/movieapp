import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { searchLists } from '../actions'
export class Search extends Component {
    state={
        search: '',
        options: []
    }
    onChange = (e) => {
        this.setState({ search: e.target.value })
        if(this.state.search.length >= 1){
            this.props.searchLists(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${this.state.search}&page=1&include_adult=false`)
            this.props.searchList.map(List => this.setState({ options: List }))
            
        }
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.search(this.state.search)
    }
    movieSelect = (e) => {
        this.setState({ search: e.target.value })
        setTimeout(() => {
            this.props.search(this.state.search)
        }, 10);
    }
    movieNames = () => {
        if(this.state.search !== ''){
            return this.state.options.map(option=> (
                <option key={option.title} className="d-block suggestion" onClick={this.movieSelect}>{option.title}</option>
            ))
        }
        else{
            return ''
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
export default connect(mapStateToProps)(Search)