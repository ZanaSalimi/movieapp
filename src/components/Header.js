import React, { Component } from 'react'
import Search from './Search'
export class Header extends Component {
    render() {
        return (
            <div>
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <a className="navbar-brand" href="/">TMDB</a>
                        <Search search={this.props.search} />
                    </nav>
            </div>
        )
    }
}

export default Header
