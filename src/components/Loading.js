import React, { Component } from 'react'
import Spinner from '../img/Loading.gif'
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
