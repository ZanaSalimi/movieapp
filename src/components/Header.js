import React, { Component } from 'react'
import Search from './Search'
export class Header extends Component {
    render() {
        return (
            <div>
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <a className="navbar-brand" href="/">TMDB</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <Search search={this.props.search} />
                    </nav>
            </div>
        )
    }
}

export default Header
