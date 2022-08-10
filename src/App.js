import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ProjectDisplay from './pages/ProjectDisplay';

function App() {
  return (
    <div className="App">
      <Router>
        {/* when between the router and route it will apear in every single page 
        routs is used you where you want it to be*/}
        <NavBar />
        <Routes>
          <Route path="/portfolio/" element={<Home />} />
          <Route path="/portfolio/projects" element={<Projects />} />
          <Route path='/portfolio/projects/:id' element={<ProjectDisplay />} />
          <Route path="/portfolio/experience" element={<Experience />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
