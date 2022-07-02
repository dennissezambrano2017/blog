import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./pages/Blog";
import Home from "./pages/Home";

const App = () => (
  <div className='container'>
    <switch>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Blog/:id" element={<Blog />} />
      </Routes>
    </switch>
  </div>
);
export default App;