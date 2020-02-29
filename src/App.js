import React, { Component } from 'react'
import './main.scss';
import Header from './components/Header'
import Details from './components/Details'
import TopMovies from './components/TopMovies';
import Loading from './components/Loading'
import Footer from './components/Footer';
import { connect } from 'react-redux'
import { fetchMovie, topMovies, searchMovie } from './actions'
export class App extends Component {
  state={
    loading: false
  }
  search = (search) => {
    this.setState({ loading: true })
    this.props.searchMovie(search)
  }
  UNSAFE_componentWillMount(){
    this.setState({ loading: true });
    this.props.fetchMovie(`https://api.themoviedb.org/3/movie/800?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
    this.props.topMovies(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
  }
  render() { 
    const { loading } = this.props; 
    if(loading){
      return(
        <Loading />
        )
    }
    else{
      return (
        <div className="container">
          <Header search={this.search} />
          <Details />
          <TopMovies />
          <Footer />
      </div>
      )
    }
  }
}
const mapStateToProps = state => {
  return state
}
export default connect(mapStateToProps , { fetchMovie, topMovies, searchMovie })(App)