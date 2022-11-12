import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from "./App";
import Test from "./Test";

const appRouting = (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  </Router>
);

export default appRouting;