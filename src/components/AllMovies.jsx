import React from "react";
class AllMovies extends React.Component {
    state = {
        allMovies : []
    }
    componentDidMount() {
        fetch(`https://api.tvmaze.com/shows`)
        .then((res) => res.json())
        .then((data)=> this.setState({allMovies: data}))
    }
    
    buildSection = (ele) => {
        return <div key={ele.id} className="card card-1">
        <div className="card-img" style={{backgroundImage:`url(${ele.image?.original})` }} ></div>
        <a href={ele.url} className="card-link">
        <div className="card-img-hovered" style={{backgroundImage: `url(${ele.image?.original})`}} ></div>
        </a>
    
        <div className="card-info">
            <div className="card-about">
                {ele.genres.map((ele, i)=> <a key={i} href="https://www.netflix.com/ps-en/" className="card-tag tag-news">{ele}</a>)}
            <div className="card-time">rating: {ele.rating.average}</div>
        </div>
        <h1 className="card-title">{ele.name}</h1>
        <div className="card-creator">
            by <a href="s">Netflix</a>
        </div>
    </div>
    </div>
        }

  render() {
    const genres = this.props.genres
   
    if(!this.state.allMovies){
        return <h1>Loading</h1>
    }

    return (
        <div className="card-container">
        {console.log(this.state.allMovies[0])}
        {
        



        genres ==='All' ? 
        this.state.allMovies.map((ele) => {
            return  this.buildSection(ele)
        // return  <div key={ele.id} className="card card-1">
        //         <div className="card-img" style={{backgroundImage:`url(${ele.image?.original})` }} ></div>
        //         <a href={ele.url} className="card-link">
        //         <div className="card-img-hovered" style={{backgroundImage: `url(${ele.image?.original})`}} ></div>
        //         </a>

        //         <div className="card-info">
        //             <div className="card-about">
        //                 {ele.genres.map((ele)=> <a href="s" className="card-tag tag-news">{ele}</a>)}
        //             <div className="card-time">rating: {ele.rating.average}</div>
        //         </div>
        //         <h1 className="card-title">{ele.name}</h1>
        //         <div className="card-creator">
        //             by <a href="s">Netflix</a>
        //         </div>
        //     </div>
        // </div>
        })
    
    :
       this.state.allMovies.filter((ele)=> ele.genres.includes(genres))
       .map((ele) => {
        return this.buildSection(ele)




        })
    }

    </div>
    )}
}

export default AllMovies;
