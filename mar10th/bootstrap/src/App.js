import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App2 from "./App2";
import App3 from "./App3";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div> Go to either /form2 or /form3</div>}></Route>
        <Route path="/form2" element={<App2 />}>
        </Route>
        <Route exact path="/form3" element={<App3 />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
