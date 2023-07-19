import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageConnexion from "./Pages/PageConnexion";
import HomePage from "./Pages/HomePage";


function App() {

  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageConnexion />} />
                <Route path="/home" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
