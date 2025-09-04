import React from "react";
import Navbar from "./Components.jsx/Navbar";
import News from "./Components.jsx/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/sports"
          element={<News key="sports"  category="sports" />}
        />
        
        <Route
          exact
          path="/entertainment"
          element={
            <News key="entertainment"  category="entertainment" />
          }
        />
        <Route
          exact
          path="/general"
          element={<News key="general" category="general" />}
        />
        <Route
          exact
          path="/technology"
          element={<News key="technology"  category="technology" />}
        />
        <Route
          exact
          path="/health"
          element={<News key="health"  category="health" />}
        />
        <Route
          exact
          path="/science"
          element={<News key="science"  category="science" />}
        />
        <Route
          exact
          path="/"
          element={<News key="general"  category="general" />}
        />
      </Routes>
    </Router>
  );
}
