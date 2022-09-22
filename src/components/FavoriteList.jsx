import React from "react";

class FavoriteList extends React.Component {
    // state = {
    //     showFavoriteList: false
    // }

    render(){
    return ( 
        <div id="favorite-list">
            <p onClick={() => { this.props.showFavoriteList(false) }}> <ion-icon name="close"></ion-icon> </p>
            <h3> Favorite List </h3>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>

        </div>
    );
    }

}
 
export default FavoriteList;