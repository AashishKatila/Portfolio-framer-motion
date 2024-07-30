import BubblesFloat from "../components/animata/background/bubbles-float";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Landing from "./Landing";
import Projects from "./Projects";

function Homepage() {
  return (
    <div className="relative bg-black overflow-hidden font-poppins">
      <BubblesFloat />
      <div className="bg-slate-950">
        <Landing />
        <AboutMe />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default Homepage;
