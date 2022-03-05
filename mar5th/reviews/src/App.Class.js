import React from "react";
import './App.css';
import ReviewClass from "./Review.Class";

class AppClass extends React.Component{

  render(){

    return(
      <main>
        <section className="container">
          <div className="title">
            <h2>Our Reviews</h2>
            <div className="underline"></div>
          </div>
          <ReviewClass />
        </section>
      </main>
    )
  }
}

export default AppClass;
