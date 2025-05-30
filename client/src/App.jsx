import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import SignIn from "./pages/SignIn";
import Develop from "./pages/Develop";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/developer"
          element={<Develop />}
        />
        <Route
          path="/signin"
          element={<SignIn />}
        />
        <Route
          path="/signup"
          element={<Signup />}
        />
      </Routes>
    </Router>
  );
}

export default App;