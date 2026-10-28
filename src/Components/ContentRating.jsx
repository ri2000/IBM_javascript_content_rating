
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
        likes: 0,
        dislikes: 0,
        handleLike: () => {
            this.setState((prevState) =>({
                likes: prevState.likes + 1
            }));
        },
        handleDislike: () => {
            this.setState((prevState) =>({
                dislikes: prevState.dislikes + 1,
            }));
        },
        totalRatings: 0
    };
  }
  render() {
    return (
     <>
     <div className="content-rating">
        <p>
            Pirates of the carabean
        </p>
        <div className="rating-buttons">
            <button onClick={this.state.handleLike, this.calculateTotal} className="like-button">
                Like ({this.state.likes})
            </button>
            <button onClick={this.state.handleDislike} className="dislike-button">
                Dislike ({this.state.dislikes})
            </button>
        </div>
     </div>
     </>
    );
  }

  calculateTotal(){
    this.setState(prevState => ({
        totalRatings: this.state.likes + this.state.dislikes
    }))
  }
}

export default ContentRating;
