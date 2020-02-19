import React, { Component } from 'react'

export class Search extends Component {
    state={
        search: ''
    }
    onChange = (e) => {
        this.setState({ search: e.target.value })
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
                </form>
            </div>
        )
    }
}

export default Search
