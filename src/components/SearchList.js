import React, { Component } from 'react'

export class SearchList extends Component {
    render() {
        if(this.props.movie.length !== 0){
            return this.props.movie.results.map((tst,id) => 
            <p key={id} className="badge">{tst.title}</p>
            )
        }
        else{
            return ''
        }
    }
}

export default SearchList
