import React /*, { useEffect } */ from "react";
import star from '../icons/star.svg';
import filledStar from '../icons/star-fill.svg'
class FilmInfo extends React.Component {
    state = {
        data: null,
    }
    componentDidMount() {
        fetch(`https://api.tvmaze.com/singlesearch/shows?q=fargo`)
            .then((res) => res.json())
            .then((data) => this.setState({ data }))
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.movie?.id !== this.props.movie?.id) {
            fetch(`https://api.tvmaze.com/shows/${this.props.movie.id}`)
                .then((res) => res.json())
                .then((data) => this.setState({ data }))
        }
    }


    createMarkup(value) {
        return { __html: `summary: ${value}` };
    }


    render() {

        if (!this.state.data) {
            return <h2>loading ...</h2>
        }


        return (
            <section id="details">
                <div><img className="picture" src={this.state.data.image?.original || 'https://th.bing.com/th/id/OIP.BktOiHnYJ46AB8NzyeO6bgHaE8?pid=ImgDet&rs=1'} alt="s" /></div>
                <div>
                    <img src={star} alt=""  onClick={(e) => {
                        this.props.setData((prev) => {
                            
                            const curr = [...prev];
                            if (curr.includes(this.state.data.name)) {
                                e.target.setAttribute('src', star)
                                curr.splice(curr.indexOf(this.state.data.name), 1)
                            } else {
                                e.target.setAttribute('src', filledStar)
                                curr.push(this.state.data.name);
                            }

                            return curr;
                        })
                    }} />

                    <p className="name">suggestion: {this.state.data.name}</p>
                    <p className="rating">rating: {this.state.data.rating.average}</p>
                    <p className="summary" dangerouslySetInnerHTML={this.createMarkup(this.state.data.summary)} >
                        {/* summary: {this.state.data.summary}  */}
                    </p>
                </div>
            </section>
        );
    };

}


export default FilmInfo;
