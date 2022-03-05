import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import people from "./data";

const Review = () => {
  // const [varName,setVarName] = useState(default value of variable);
  const [index, setIndex] = useState(0);

  const { name, job, image, text } = people[index];

  const prevPerson = () => {
    let newIndex = index - 1;
    if (newIndex < 0) {
      newIndex = people.length - 1;
    }
    setIndex(newIndex);
  };
  const nextPerson = () => {
    let newIndex = index + 1;
    if (newIndex >= people.length) {
      newIndex = 0;
    }
    setIndex(newIndex);
  };

  const randomPerson = () => {
    let randomIndex = Math.floor(Math.random() * people.length);
    if (randomIndex === index) {
      randomIndex += 1;
    }
    if (randomIndex >= people.length) {
      randomIndex = 0;
    }
    setIndex(randomIndex);
  };
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
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
