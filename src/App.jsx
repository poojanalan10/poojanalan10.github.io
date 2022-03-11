import Intro from "./components/introduction/intro";
import About from "./components/about/About";
import Previous from "./components/previous-work/prev";
import ProjectList from "./components/ProjectList/projectList";
import Contact from "./components/Contact/contact";
import NavBar from "./components/Navbar/Navbar";

const App = () => {
  return (
  <div>
    <NavBar/>
    <Intro/>
    <About/>
    <Previous/>
    <ProjectList/>
    <Contact/>
    
  </div>
  );
};

export default App;