import "./App.css";
import React from "react";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Articles from "./Components/Articles";
import Article from "./Components/Article";
import Topics from "./Components/Topics";
import ParametricTopic from "./Components/ParametricTopics";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<Article />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/topics/:parametricTopic" element={<ParametricTopic />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
