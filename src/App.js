import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageConnexion from "./Pages/PageConnexion";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageConnexion />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
