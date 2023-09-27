import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PageConnexion from "./Pages/PageConnexion/PageConnexion";
import HomePage from "./Pages/HomePage/HomePage";
import useAuth from "./Hooks/useAuth";
import SettingsPage from './Pages/SettingsPage';
import EntreprisePage from './Pages/EntreprisePage';
import AddEntreprisePage from './Pages/AddEntreprisePage';
import AccueilEntreprise from './Pages/AccueilEntreprise';
import BoutiqueEntreprise from './Pages/BoutiqueEntreprise';

function App(): JSX.Element {
  const [isAuthenticated, isLoading] = useAuth();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  

  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<PageConnexion />} />
            <Route
              path="/home"
              element={isAuthenticated ? <HomePage /> : <Navigate to="/" />}
            />
            <Route
              path="/settings"
              element={isAuthenticated ? <SettingsPage /> : <Navigate to="/" />}
            />
            <Route
              path="/entreprise"
              element={isAuthenticated ? <EntreprisePage />: <Navigate to="/" />}
            />
            <Route
              path="/newentreprise"
              element={isAuthenticated ? <AddEntreprisePage/>: <Navigate to="/" />}
            />
            <Route
              path="/entreprise/accueil/:entrepriseId"
              element={isAuthenticated ? <AccueilEntreprise/>: <Navigate to="/" />}
            />
            <Route
              path="/entreprise/boutique"
              element={isAuthenticated ? <BoutiqueEntreprise/>: <Navigate to="/" />}
            />
          </Routes>
        </Router>
    </div>
  );
}

export default App;