import { NavBar, Home, SocialLinks, TimeLine, Projects, Technologies, Contact } from './components/index';
function App() {
  console.log(process.env.REACT_APP_GET_FORM)

  return (
    <div>
      <NavBar />
      <Home />
      <Projects />
      <Technologies />
      <TimeLine />
      <Contact/>

      <SocialLinks />
    </div>
  );
}

export default App;
