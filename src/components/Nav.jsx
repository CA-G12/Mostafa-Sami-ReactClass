import React from "react";
import FavoriteList from "./FavoriteList";
class  Nav  extends React.Component {
    state = {
        showFavoriteList: false
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.showFavoriteList !== this.state.showFavoriteList){
                this.setState({showFavoriteList: this.state.showFavoriteList })
        }
    }

    handleShowList = (value) => {
        console.log(value)
        console.log(this.state.showFavoriteList)
        this.setState({showFavoriteList: value })

    }

render() {

    return (
    <header>
        <nav>
            <h1>Movies Land</h1>
            <ul>
                <li>Home</li>
                <li onClick={() => this.setState({ showFavoriteList: !this.state.showFavoriteList }) }>List anime
                        {this.state.showFavoriteList && <FavoriteList showFavoriteList = {  this.handleShowList /*this.state.showFavoriteList */ } /> }                   
                </li>
            </ul>
        </nav>
    </header>
    );
};

}


export default Nav;
