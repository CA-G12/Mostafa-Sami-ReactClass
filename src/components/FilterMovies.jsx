import React from "react";

class FilterMovies extends React.Component{
state = {
    filterMovies : ''
}
    handleFilter = (value) => {
        this.setState({filterMovies: value})
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (this.state.filterMovies !== prevState.filterMovies) {
            this.props.genresSelected(this.state.filterMovies)
        }
    }





render() {
    return ( 
        <section id="filter-movies">
            <h2>Select Your Favorite Movie</h2>
            <p>Movies filtered by genres.</p>
            <select
            type="text"
            name="filterMovies"
            onChange={(e) => this.handleFilter(e.target.value)}
            value={this.state.searchQuery}
            >
                <option>All</option>
                <option>Drama</option>
                <option>Action</option>
                <option>Science-Fiction</option>
                <option>Thriller</option>
                <option>Crime</option>
            </select>
            
            {/* <input
            className="search-input"
            type="text"
            name="search"
            onChange={(e) => this.handleSearch(e.target.value)}
            value={this.state.searchQuery}
            placeholder="Search anime or movie..."/>
             */}
            {/* <SearchResult searchQuery = {this.state.searchQuery} movieSelected={this.props.movieSelected} /> */}
        
        </section>
        );

}



}

export default FilterMovies;