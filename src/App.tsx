import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import { useScrollAnimation } from "./components/Hooks/useScrollAnimation";


const App = () => {
  const home = useScrollAnimation();
  const about = useScrollAnimation();
  const projects = useScrollAnimation();
  const contact = useScrollAnimation();

  return (
    <div className="bg-linear-to-r from-(--main-bg-color-1) to-(--main-bg-color-2) scroll-smooth">
      <NavBar />

      <section
        ref={home.ref}
        id="home"
        className={`w-full h-screen scroll-mt-24 transition-all duration-700
          ${home.show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >
        <Home />
      </section>

      <section
        ref={about.ref}
        id="about"
        className={`w-full h-screen scroll-mt-24 transition-all duration-700 delay-100
          ${about.show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >
        <About />
      </section>

      <section
        ref={projects.ref}
        id="projects"
        className={`w-full h-full scroll-mt-24 transition-all duration-700 delay-200
          ${projects.show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >
        <Projects />
      </section>

      <section
        ref={contact.ref}
        id="contact"
        className={`w-full h-screen scroll-mt-24 transition-all duration-700 delay-300
          ${contact.show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >
        <Contact />
      </section>
    </div>
  );
};

export default App;
