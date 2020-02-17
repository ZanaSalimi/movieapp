import React, { Component } from 'react'
import Terminator from '../img/Terminator.jpg'
export class Details extends Component {
    render() {
        return (
            <div>
                <div className="d-flex details">
                    <div className="col col-md-4 col-lg-4 mr-5">
                        <div className="pic-details">
                            <img src={Terminator} alt={Terminator}  />
                        </div>
                    </div>
                    <div className="col">
                        <div className="title">
                            <h2>TERMINATOR DARK FATE</h2>
                            <p>Decades after Sarah Connor prevented Judgment Day, a lethal new Terminator is sent to eliminate the future leader of the resistance. In a fight to save mankind, battle-hardened Sarah Connor teams up with an unexpected ally and an enhanced super soldier to stop the deadliest Terminator yet.</p>
                        </div>
                        <div className="genre">
                            <h2>GENRE</h2>
                            <div className="tags">
                                <span className="tag">ACTION</span>
                                <span className="tag">SCI-FI</span>
                            </div>
                        </div>
                        <div className="rating">
                            <p>Ratings: <span>8.9</span> / 10</p>
                        </div>
                        <div className="time">
                            <p>Time: <span>128</span> Min</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Details
