
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
        likes: 0,
        dislikes: 0,
        totalRatings: 0,
        handleLike: () => {
            this.setState((prevState) =>({
                likes: prevState.likes + 1,
                totalRatings: prevState.totalRatings + 1
            }));
        },
        handleDislike: () => {
            this.setState((prevState) =>({
                dislikes: prevState.dislikes + 1,
                totalRatings: prevState.totalRatings + 1
            }));
        }
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
            <button onClick={this.state.handleLike} className="like-button">
                Like ({this.state.likes})
            </button>
            <button onClick={this.state.handleDislike} className="dislike-button">
                Dislike ({this.state.dislikes})
            </button>
            <p>Total Ratings: {this.state.totalRatings}</p>
        </div>
     </div>
     </>
    );
  }
}

export default ContentRating;
