import React from "react";
import "./App.css";
import Review from "./Review";

// function App(){

// }

const App = () => {
  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <Review />

    </section>
  );
};

export default App;
