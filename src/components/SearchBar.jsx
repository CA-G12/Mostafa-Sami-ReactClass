import React from "react";
import SearchResult from "./SearcResult";

class SearchBar extends React.Component{
state = {
    searchQuery : ''
}
    handleSearch = (value) => {
        this.setState({searchQuery: value})
    }

    // movieSelected = (value) => {
    //     // this.setState({searchQuery: value})
    // }


render() {
    return ( 
        <section id="search">
            <h2>Explore</h2>
            <p>What are you gonna watch today ?</p>
            <input
            className="search-input"
            type="text"
            name="search"
            onChange={(e) => this.handleSearch(e.target.value)}
            value={this.state.searchQuery}
            placeholder="Search anime or movie..."/>
            
            <SearchResult searchQuery = {this.state.searchQuery} movieSelected={this.props.movieSelected} />
        
        </section>
        );

}



}

export default SearchBar;