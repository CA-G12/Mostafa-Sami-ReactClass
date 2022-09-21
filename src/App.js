import './App.css';
import Cover from './components/Cover';
import Nav from './components/Nav';
import FilmInfo from './components/FilmInfo';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <>
    <Nav />
    <Cover />
    <SearchBar />
    <FilmInfo name ='Fargo' />
    </>
  );
}

export default App;
