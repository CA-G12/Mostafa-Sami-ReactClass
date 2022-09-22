import './App.css';
import Cover from './components/Cover';
import Nav from './components/Nav';
import FilmInfo from './components/FilmInfo';
import SearchBar from './components/SearchBar';
import React from 'react';

class App extends React.Component {
  state = {
    movieInfo: {},
    movieSelected: null,
    data:[]
  }


  movieSelected = (id, name) => {
    this.setState({ movieSelected: { id, name } })
  }
  setData = (cb) => {
    const newData=cb(this.state.data)
    this.setState({data:newData})
    
  }


  render() {
    return (
      <>
        <Nav data={this.state.data}/>
        <Cover />
        <SearchBar movieSelected={this.movieSelected} />
        <FilmInfo movie={this.state.movieSelected} setData={this.setData}/>
      </>
    );
  }
}

export default App;
