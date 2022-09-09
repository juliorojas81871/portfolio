import { NavBar, Home, SocialLinks, TimeLine, Projects, Technologies, Contact } from './components/index';

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Projects />
      <Technologies />
      <TimeLine />
      <Contact />

      <SocialLinks />
    </div>
  );
}

export default App;
