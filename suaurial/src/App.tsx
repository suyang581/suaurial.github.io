import React from "react";

import { HashRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/navbar/navbar";
import { Gallery } from "./components/gallery/gallery";
import { About } from "./components/about/about";

import "./index.css";

import { galleries } from "./site_data";

function App() {
  return (
    <HashRouter basename="/">
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Gallery images={galleries[0].images} />} />
          {galleries.map((gallery, i) => (
            <Route
              key={i}
              path={gallery.url}
              element={<Gallery key={i} images={gallery.images} />}
            />
          ))}
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
