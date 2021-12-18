import './App.css';
import LandingPage from './Components/LandingPage/LandingPage';
import AboutMe from './Components/AboutMe/AboutMe';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <LandingPage />
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
