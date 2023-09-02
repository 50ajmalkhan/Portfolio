import "../App.css";
import Home from "./Home";
import About from "./About";
import Resume from "./Resume";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Display({isLargeScreen}) {
  return (
    <div className={`pl-${isLargeScreen ? "60" : "0"} w-screen back text-white`}>
      <Home />
      <About />
      <Resume />
      <Projects />
      <Contact />
    </div>
  );
}
