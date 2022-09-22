import './App.css';
import Cover from './components/Cover';
import Nav from './components/Nav';
import FilmInfo from './components/FilmInfo';
import SearchBar from './components/SearchBar';
import React from 'react';

class App extends React.Component{
  state = {
    movieInfo : {},
    movieSelected:null
  }

  
  movieSelected = (id, name) => {
    this.setState({ movieSelected: { id ,  name  } })
}


render(){
  return (
    <>
    <Nav />
    <Cover />
    <SearchBar movieSelected = {this.movieSelected} />
    <FilmInfo movie ={this.state.movieSelected}  />
    </>
    );
  }
}

export default App;
