import React, { Component } from 'react'
import './main.scss';
import Header from './components/Header'
import Details from './components/Details'
import TopMovies from './components/TopMovies';
import Loading from './components/Loading'
import Footer from './components/Footer';
import { connect } from 'react-redux'
import { fetchMovie, topMovies, searchMovie, loading } from './actions'
export class App extends Component {
  state={
    loading: false
  }
  search = (search) => {
    this.props.loading()
    this.props.searchMovie(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${search}&page=1&include_adult=false`, search)
  }
  UNSAFE_componentWillMount(){
    this.props.loading()
    this.props.fetchMovie()
    this.props.topMovies()
  }
  render() { 
    const { isLoaded } = this.props;
    if(isLoaded){
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
  console.log(state)
  return state
}
const mapDispatchToProps = dispatch => {
  return {
    fetchMovie : () => dispatch(fetchMovie()),
    topMovies : () => dispatch(topMovies()),
    loading : () => dispatch(loading())
  }
}
export default connect(mapStateToProps , mapDispatchToProps)(App)