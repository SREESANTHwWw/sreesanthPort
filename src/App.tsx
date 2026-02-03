import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import PillNav from "./components/NavBar/PillNav";

// Unified Scroll Variant for all sections
const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
};

const App: React.FC = () => {
  return (
    <div className="bg-linear-to-r from-[--main-bg-color-1] to-[--main-bg-color-2] scroll-smooth selection:bg-blue-500/30">
    
      <div className="flex justify-center items-center">

      
      <PillNav
        items={[
          { label: "Home", href: "/" },
          { label: "About", href: "#about" },
          { label: "Services", href: "#projects" },
          { label: "Contact", href: "#contact" },
        ]}
        activeHref="/"
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="#000000"
        pillColor="#ffffff"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#000000"
      
        initialLoadAnimation={false}
      />
      </div>

      <motion.section
        id="home"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="w-full min-h-screen scroll-mt-24 "
      >
        <Home />
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        className="w-full min-h-screen scroll-mt-24"
      >
        <About />
      </motion.section>

      {/* Projects Section - note h-full for dynamic content */}
      <motion.section
        id="projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariants}
        className="w-full min-h-full scroll-mt-24"
      >
        <Projects />
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        className="w-full min-h-screen scroll-mt-24"
      >
        <Contact />
      </motion.section>
    </div>
  );
};

export default App;
