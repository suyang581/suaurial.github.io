import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/navbar/navbar";
import { Gallery } from "./components/gallery/gallery";
import { About } from "./components/about/about";

import "./index.css";

import { galleries } from "./site_data";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Gallery images={galleries[0].images} />} />
          {galleries.map((gallery, i) => (
            <Route
              key={i}
              path={gallery.url}
              element={<Gallery images={gallery.images} />}
            />
          ))}
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
