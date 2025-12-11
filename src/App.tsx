import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";


const App = () => {
  return (
    <div className="bg-linear-to-r from-(--main-bg-color-1) to-(--main-bg-color-2) h-full ">
      <NavBar />
      <section id="home" className="w-full h-screen">
        <Home />
      </section>
      <section
        id="about"
        className="w-full h-screen bg-linear-to-l from-(--main-bg-color-1) to-(--main-bg-color-2)"
      >
        <About />
      </section>
      <section id="projects" className="w-full  ">
        <Projects />
      </section>
      <section
        id="contact"
        className="w-full h-screen bg-linear-to-l from-(--main-bg-color-1) to-(--main-bg-color-2)"
      >
        <Contact />
      </section>
      
    </div>
  );
};

export default App;
