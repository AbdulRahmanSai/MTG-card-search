import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CardForm from "./components/CardForm";
import CardDisplay from "./components/CardDisplay";
import GlobalStyles from "./styles/GlobalStyles";
import "./App.css";

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<CardForm />} />
        <Route path="/card-display" element={<CardDisplay />} />
      </Routes>
    </Router>
  );
};

export default App;