import React, { Component } from 'react'
import Spinner from '../45.gif'
export class Loading extends Component {
    render() {
        return (
            <div className="spin">
                <img src={Spinner} alt={Spinner} className="spinner" />
            </div>
        )
    }
}

export default Loading
