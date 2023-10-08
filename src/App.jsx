import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import Hero from "./section/Hero";
import Project from "./section/Project";
import Design from "./section/Design";
import Pictures from "./section/Pictures";
import Writing from "./section/Writing";
import Footer from "./section/Footer";
import Profile from "./section/Profile";
import Skill from "./section/Skill";
import Hobby from "./section/Hobby";
import WrittingPages from "./pages/WrittingPages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        {/* <NavbarRoutes/> */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <Profile />
              <Skill />
              <Project />
              <Design />
              <Pictures />
              <Writing />
              <Footer />
            </>
          }
        />
        <Route path="/writting" element={<WrittingPages />} />
      </Routes>
    </Router>
  );
}

export default App;
