import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import PastChat from "./components/PastChat";

function App() {
  return (
    <div className="relative">
      {/* Navbar tetap ada di atas dan tidak berubah saat route berubah */}
      <Navbar />
      <div >   
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/chat" element={<PastChat />} />
          {/* <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
