import React from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import people from "./data";

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };

    this.randomPerson = this.randomPerson.bind(this);
    this.prevPerson = this.prevPerson.bind(this);
    this.nextPerson = this.nextPerson.bind(this);
  }

  prevPerson = () => {
    let newIndex = this.state.index - 1;
    if(newIndex<0){
        newIndex = people.length-1
    }
    this.setState({ index: newIndex });
  };

  nextPerson = () => {
    let newIndex = this.state.index + 1;
    if(newIndex >= people.length){
        newIndex = 0
    }
    this.setState({ index: newIndex });
  };
  randomPerson = () => {
    let randomIndex = Math.floor(Math.random() * people.length);
    if (randomIndex === this.state.index) {
      randomIndex += 1;
    }
    if(randomIndex>=people.length){
        randomIndex = 0
    }
    this.setState({ index: randomIndex });
  };
  render() {
    const { name, job, image, text } = people[this.state.index];

    return (
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>

        <div className="button-container">
          <button className="prev-btn" onClick={this.prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={this.nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="random-btn" onClick={this.randomPerson}>
          surprise me
        </button>
      </article>
    );
  }
}

export default Review;
