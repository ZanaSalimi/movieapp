import React, { Component } from 'react'
import './main.scss';
import Header from './components/Header'
import Details from './components/Details'
import TopMovies from './components/TopMovies';
import Loading from './components/Loading'
import Footer from './components/Footer';
import { connect } from 'react-redux'
import { fetchAPI } from './actions'
export class App extends Component {
  state={
    t:[],
    loading: false
  }
  search = (search) => {
    //this.props.loading()
    //this.props.searchMovie(search)
  }
  UNSAFE_componentWillMount(){
    this.props.fetchAPI()
  }
  
  render() { 
    const { loading } = this.props.Movies;
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
const mapDispatchToProps = dispatch => {
  return {
    fetchAPI : () => dispatch(fetchAPI())
  }
}
export default connect(mapStateToProps , mapDispatchToProps)(App)