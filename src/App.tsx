import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NoPage from "./View/Components/NoPage";
import Board from "./View/Components/BoardView/Board";
import Layout from "./View/Components/layout/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./View/Components/Home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/home/:id" element={<Board></Board>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
