import React, { Component } from 'react'

export class Tag extends Component {
    render() {
        return this.props.genres.map(t=> 
            <p className="d-inline tag" key={t.id}>{t.name}</p>
            )
    }
}

export default Tag
