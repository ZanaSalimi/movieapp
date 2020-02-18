import React from 'react'
import Tag from './Tag'

class Details extends React.Component {
        render(){
            const { title, overview, runtime, vote_average, genres, poster_path } = this.props.tmdb;
            return (
                <div>
                    <div className="d-flex details">
                        <div className="col col-md-4 col-lg-4 mr-5">
                            <div className="pic-details">
                                <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title}  />
                            </div>
                        </div>
                        <div className="col">
                            <div className="title">
                                <h2>{title}</h2>
                                <p>{overview}</p>
                            </div>
                            <div className="genre">
                                <h2>GENRE</h2>
                                <div className="tags">
                                    {<Tag genres={genres} />}
                                </div>
                            </div>
                            <div className="rating">
                                <p>Ratings: <span>{vote_average}</span> / 10</p>
                            </div>
                            <div className="time">
                                <p>Time: <span>{runtime}</span> Min</p>
                            </div>
                        </div>
                    </div>
                </div>
            )    
        }
            
    }

export default Details
