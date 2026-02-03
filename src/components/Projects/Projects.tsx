import { useState, useRef } from "react";
import { useInView, motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Dils Trades",
    tag: "E-COMMERCE PLATFORM",
    description: "A full-featured MERN e-commerce application offering secure authentication, complete product management, and a smooth shopping experience.",
    image1: "/Dils.png",
    image2: "/dils2.png",
    link: "https://dils-trades.onrender.com/",
  },
  {
    id: 2,
    title: "RettroFit",
    tag: "INDUSTRIAL SOLUTIONS",
    description: "A specialized reverse engineering platform for machine parts. Enables industries to redesign obsolete components using a streamlined workflow.",
    image1: "/rettro.png",
    image2: "/retto2.png",
    link: "https://rettrofit-fd.onrender.com/",
  },
];

const Projects = () => {
  const [index, setIndex] = useState(0);
  const sectionRef = useRef(null);
  
  // Set once: false to allow re-triggering when scrolling back up
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const next = () => setIndex((prev) => (prev + 1) % projects.length);
  const prev = () => setIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center py-24 px-6 overflow-hidden bg-[#030303] text-white selection:bg-blue-500/30"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[70%] lg:w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[70%] lg:w-[50%] h-[50%] bg-purple-900/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl w-full">
        {/* Header - Detects Scroll In/Out */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex flex-col items-center mb-16 space-y-4"
        >
          <div className="flex items-center gap-3">
            <span className="h-1 w-8 lg:w-10 bg-blue-500"></span>
            <span className="text-blue-400 font-mono text-[11px] lg:text-xs tracking-tighter">
              PORTFOLIO PIECES
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-linear-to-r from-white via-gray-300 to-gray-600 uppercase">
            Featured Projects
          </h2>
        </motion.div>

        {/* Project Slider */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              // Animate entry and exit based on the current slide index
              initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
              animate={isInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : { opacity: 0, x: 50 }}
              exit={{ opacity: 0, x: -50, filter: "blur(10px)" }}
              transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Text Content */}
              <div className="order-2 lg:order-1 space-y-6 text-center lg:text-left">
                <div className="space-y-2">
                  <span className="text-blue-400 font-mono text-sm tracking-[0.3em] uppercase opacity-80">
                    {projects[index].tag}
                  </span>
                  <h3 className="text-4xl lg:text-6xl font-bold text-white tracking-tighter">
                    {projects[index].title}
                  </h3>
                </div>

                <p className="text-gray-400 text-lg leading-relaxed font-light max-w-xl mx-auto lg:mx-0">
                  {projects[index].description}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-4">
                  <motion.a
                    href={projects[index].link}
                    target="_blank"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-8 py-3.5 bg-white text-black rounded-full overflow-hidden font-bold text-sm flex items-center gap-2"
                  >
                    <span className="relative z-10">Live Demo</span>
                    <FaExternalLinkAlt className="relative z-10" size={12} />
                    <div className="absolute inset-0 bg-linear-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                  
                  <div className="flex gap-4">
                    <button onClick={prev} className="p-4 cursor-pointer rounded-full border border-white/10 hover:bg-white/5 transition-all text-white"><FaArrowLeft /></button>
                    <button onClick={next} className="p-4 cursor-pointer rounded-full border border-white/10 hover:bg-white/5 transition-all text-white"><FaArrowRight /></button>
                  </div>
                </div>
              </div>

              {/* Visuals */}
              <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
                <div className="relative aspect-square rounded-lg overflow-hidden border border-white/10 group">
                  <img src={projects[index].image1} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" alt="Preview" />
                </div>
                <div className="relative aspect-square rounded-lg overflow-hidden border border-white/10 translate-y-8 group">
                  <img src={projects[index].image2} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" alt="Preview" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;