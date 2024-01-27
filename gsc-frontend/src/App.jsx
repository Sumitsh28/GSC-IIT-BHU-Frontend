import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Sports from "./pages/Sports";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/events" element={<Events />} />
          <Route exact path="/sports" element={<Sports />} />
          <Route exact path="/contacts" element={<Contact />} />
        </Routes>

        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
