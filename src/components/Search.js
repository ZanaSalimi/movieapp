import React, { Component } from 'react'

export class Search extends Component {
    render() {
        return (
            <div className="ml-auto">
                <form className="form-inline my-2 my-lg-0 ">
                    <input className="form-control mr-sm-2 searchbar" type="search" placeholder="Search" aria-label="Search"/ >
                </form>
            </div>
        )
    }
}

export default Search
