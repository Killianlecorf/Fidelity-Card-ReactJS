import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PageConnexion from "./Pages/PageConnexion";
import HomePage from "./Pages/HomePage";
import useAuth from "./Hooks/useAuth";

function App() {
  const [isAuthenticated, isLoading] = useAuth();

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<PageConnexion />} />
          <Route path="/home" element={isAuthenticated ? <HomePage /> : <Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;