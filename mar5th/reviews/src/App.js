import React from "react";
import './App.css';
import Review from "./Review";

// function App(){

// }

const App = () => {

    return(
        <main>
            <section className="container">
                <div className="title">
                    <h2>Our Reviews</h2>
                    <div className="underline"></div>    
                </div>    
                <Review />
            </section>
        </main>
    )

}

export default App;