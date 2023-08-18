import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PageConnexion from "./Pages/PageConnexion/PageConnexion";
import HomePage from "./Pages/HomePage/HomePage";
import useAuth from "./Hooks/useAuth";
import {AuthContext} from "./Hooks/useAuthContext";

function App(): JSX.Element {
  const [isAuthenticated, isLoading] = useAuth();
  const { informationUser } = useContext(AuthContext);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  console.log(informationUser);
  

  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<PageConnexion />} />
            <Route
              path="/home"
              element={isAuthenticated ? <HomePage /> : <Navigate to="/" />}
            />
          </Routes>
        </Router>
    </div>
  );
}

export default App;