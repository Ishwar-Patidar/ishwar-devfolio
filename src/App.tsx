import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      {/* ✅ Main single-page layout */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </>
          }
        />
        {/* ✅ Separate detail route */}
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
