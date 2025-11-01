import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
      <Footer />
    </Router>
  );
}

export default App;
