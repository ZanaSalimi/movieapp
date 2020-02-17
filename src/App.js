import React from 'react';
import './main.scss';
import Header from './components/Header'
import Details from './components/Details'
import TopMovies from './components/TopMovies';
import Footer from './components/Footer';
function App() {
  return (
    <div className="container">
      <Header />
      <Details />
      <TopMovies />
      <Footer />
    </div>
  );
}

export default App;