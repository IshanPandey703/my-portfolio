import './App.css';
import LandingPage from './Components/LandingPage/LandingPage';
import AboutMe from './Components/AboutMe/AboutMe';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <LandingPage />
      <AboutMe />
      <Skills />
      <Projects />
      {/* <Contact /> */}
    </div>
  );
}

export default App;
