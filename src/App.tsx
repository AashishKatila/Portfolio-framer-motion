import "./App.css";
import BubblesFloat from "./components/animata/background/bubbles-float";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Landing from "./pages/Landing";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="relative overflow-hidden font-poppins">
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

export default App;
