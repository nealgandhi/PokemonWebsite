import "./input.css";
import Body from "./components/Body.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div className="bg-black h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Body />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
