import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";

import Navbarroutes from "./routes/navbarroutes";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/*" element={<Navbarroutes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
