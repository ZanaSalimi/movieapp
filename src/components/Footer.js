import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react';
export class Details extends Component {
    render() {
        return (
            <div className="footer text-center my-5">
                <p><a href="https://github.com/ZanaSalimi">Coded By ZanaSalimi</a></p>
                <p><a href="https://github.com/ZanaSalimi/movieapp">Code On Github <Icon name="github" size="large" /></a></p>
            </div>
        )
    }
}

export default Details
