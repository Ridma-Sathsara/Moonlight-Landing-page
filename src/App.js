import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Navbarroutes from "./routes/navbarroutes";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/*" element={<Navbarroutes />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
