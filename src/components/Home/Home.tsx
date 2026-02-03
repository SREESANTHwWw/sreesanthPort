import React from "react";
import type { JSX } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin, FaArrowRight } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import TextaniMation from "../Functions/TextAnimationFun/TextaniMation";

interface SocialLink {
  icon: JSX.Element;
  link: string;
  label: string;
}

const Home: React.FC = () => {
  const socialLinks: SocialLink[] = [
    { icon: <BsGithub />, link: "https://github.com/SREESANTHwWw", label: "GitHub" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/sreesanth-m-a09162229/", label: "LinkedIn" },
    { icon: <FaXTwitter />, link: "https://x.com/BenfattoGa98605", label: "Twitter" },
  ];

 
 

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { 
  duration: 0.8, 
  ease: [0.21, 0.47, 0.32, 0.98] as const 
}
    },
  };

  return (
    <main className="relative w-full min-h-screen flex items-center justify-center overflow-x-hidden bg-[#030303] text-white selection:bg-blue-500/30 py-12 lg:py-0">
      
      {/* Background Layers - Perfectly synced with other sections */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[70%] lg:w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[70%] lg:w-[50%] h-[50%] bg-purple-900/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        // Set once: false to re-animate when scrolling back to the top
        viewport={{ once: false, amount: 0.1 }}
        className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 z-10"
      >
        
        {/* Visual Section */}
        <motion.div 
          variants={fadeInUp}
          className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2"
        >
          <div className="relative group w-full max-w-[60] sm:max-w-[300px] lg:max-w-[320px]">
            <div className="absolute -inset-3 border border-white/10 rounded-lg pointer-events-none group-hover:scale-105 transition-transform duration-500 hidden sm:block" />
            
            <div className="relative aspect-4/5 lg:h-[420px] w-full rounded-[1.8rem] overflow-hidden bg-zinc-900 shadow-2xl">
              <motion.img 
                src="/mypick.png" 
                alt="Sreesanth M" 
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-5 left-5">
                <p className="text-[9px] font-mono text-blue-400 mb-0.5 tracking-[0.2em]">STATUS</p>
                <p className="text-xs font-bold tracking-widest uppercase">Available for Hire</p>
              </div>
            </div>

            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-12 h-12 lg:w-20 lg:h-20 border border-dashed border-white/10 rounded-full hidden sm:block"
            />
          </div>
        </motion.div>

        {/* Text Content Section */}
        <div className="lg:col-span-7 p-10 flex flex-col justify-center text-center lg:text-left space-y-5 lg:space-y-6 order-2 lg:order-1">
          <motion.div variants={fadeInUp} className="flex items-center justify-center lg:justify-start gap-3">
            <span className="h-px w-8 lg:w-10 bg-blue-500"></span>
            <span className="text-blue-400 font-mono text-[11px] lg:text-xs tracking-tighter">
              MERN STACK DEVELOPER
            </span>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h1 className="text-4xl sm:text-5xl xl:text-7xl font-black tracking-tight leading-[1.1] lg:leading-[0.9] text-transparent bg-clip-text bg-linear-to-r from-white via-gray-300 to-gray-600 uppercase">
              Sreesanth M
            </h1>
          </motion.div>

          <motion.div variants={fadeInUp} className="max-w-lg mx-auto lg:mx-0">
            <div className="text-base sm:text-lg lg:text-xl text-gray-400 font-light leading-relaxed min-h-10">
               <TextaniMation
                words={[
                  "Architecting Digital Experiences",
                  "Building Scalable Web Apps",
                  "Crafting Clean User Interfaces"
                ]}
              />
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 lg:gap-6 pt-2">
            <motion.button 
              onClick={() => {
                const projectsSection = document.getElementById("projects");
                projectsSection?.scrollIntoView({ behavior: "smooth" });
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto group relative px-7 py-3.5 bg-white text-black rounded-full overflow-hidden font-bold text-sm flex items-center justify-center gap-2"
            >
              <span className="relative z-10">View My Work</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-linear-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>

            <div className="flex gap-5">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, color: "#60a5fa" }}
                  className="text-xl lg:text-2xl text-gray-500 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

      </motion.div>

      {/* Explore Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 opacity-20">
        <span className="text-[9px] font-mono tracking-[0.3em]">EXPLORE</span>
        <motion.div 
          animate={{ y: [0, 6, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-px h-8 bg-linear-to-b from-white to-transparent"
        />
      </div>
    </main>
  );
};

export default Home;