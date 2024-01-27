import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes } from "react-router-dom";
import Video from "./components/Video";
import Stats from "./components/Stats";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>

        <Routes>
          {/* <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/events" element={<EventsPage />} />
          <Route exact path="/teams" element={<TeamPage />} />
          <Route exact path="/clubs" element={<ClubsPage />} />
          <Route exact path="/contacts" element={<ContactsPage />} /> */}
        </Routes>
        <Video></Video> 

        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
