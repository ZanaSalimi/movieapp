import React, { Component } from 'react'
import './main.scss';
import Header from './components/Header'
import Details from './components/Details'
import TopMovies from './components/TopMovies';
import Loading from './components/Loading'
import Footer from './components/Footer';

export class App extends Component {
  constructor(props){
    super(props);
    this.state={
      tmdb:[],
      loading: false
    }
  }
  fetchAPI = (search) => {
    this.setState({ loading: true })
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${search}&page=1&include_adult=false`)
    .then(res => res.json())
    .then(data => {
      data.results.map(result => {
        if(search === result.title){
          return this.fetchMovieById(result)
        }
        else{
          return this.setState({loading: false})
        }
      })
    })
  }
  fetchMovieById= (result) => {
    fetch(`https://api.themoviedb.org/3/movie/${result.id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
    .then(res => res.json())
    .then(data => 
      {
        this.setState({ 
          tmdb: data,
          loading: false
        });
      }
    )
  }
  UNSAFE_componentWillMount(){
    this.setState({ loading: true });
    fetch(`https://api.themoviedb.org/3/movie/800?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
    .then(res => res.json())
    .then(data => 
      {
        this.setState({ 
          tmdb: data,
          loading: false
         });
      }
      )
  }
  render() {  
    if(this.state.loading){
      return(
        <Loading />
        )
    }
    else{
      return (
        <div className="container">
          <Header search={this.fetchAPI} />
          <Details tmdb={this.state.tmdb} />
          <TopMovies />
          <Footer />
      </div>
      )
    }
  }
}

export default App