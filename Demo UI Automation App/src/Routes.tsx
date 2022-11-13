import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Done from "./Done";

const appRouting = (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/done" element={<Done />} />
    </Routes>
  </Router>
);

export default appRouting;