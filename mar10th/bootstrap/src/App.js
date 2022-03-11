import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import App2 from "./App2";
import App3 from "./App3";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<div> Go to either
            <br />
            <Link to="/form2">/form2</Link>
            <br />
            or
            <br />
            <Link to="/form3">/form3</Link>
            </div>}
        ></Route>
        <Route path="/form2" element={<App2 />}></Route>
        <Route path="/form3" element={<App3 />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
