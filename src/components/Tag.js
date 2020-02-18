import React, { Component } from 'react'

export class Tag extends Component {
    render() {
        return this.props.genres.map(genre => (
            <span className="tag">{genre.name}</span>
        ))
    }
}

export default Tag
