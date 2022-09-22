import './App.css';
import Cover from './components/Cover';
import Nav from './components/Nav';
import FilmInfo from './components/FilmInfo';
import SearchBar from './components/SearchBar';
import React from 'react';
import AllMovies from './components/AllMovies';
import FilterMovies from './components/FilterMovies'; 
class App extends React.Component{
  state = {
    movieInfo : {},
    movieSelected:null,
    genres:'All',
    data:[]
  }

  movieSelected = (id, name) => {
    this.setState({ movieSelected: { id, name } })
  }
  setData = (cb) => {
    const newData=cb(this.state.data)
    this.setState({data:newData})
    
  }

  genresSelected = ( genres) => {
    console.log(genres)
  this.setState( { genres : genres   })
}


render(){
  return (
    <>
    <Nav data={this.state.data}/>
    <Cover />
    <SearchBar movieSelected = {this.movieSelected} />
    <FilmInfo movie={this.state.movieSelected} setData={this.setData}/>
    <FilterMovies genresSelected={this.genresSelected} />
    <AllMovies genres={this.state.genres}/>
    </>
   )
  }
}

export default App;
