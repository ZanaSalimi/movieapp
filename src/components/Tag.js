import React, { Component } from 'react'

export class Tag extends Component {
    render() {
        return this.props.genres.map((genre, id) => (
            <span className="tag" key={id}>{genre.name}</span>
        ))
    }
}

export default Tag
