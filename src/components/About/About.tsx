import React, { useRef } from "react";
import type { ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit, FaGithub, FaDocker,
} from "react-icons/fa";
import {
  SiTailwindcss, SiTypescript, SiMongodb, SiExpress, SiJest, SiMysql, SiNextdotjs,
} from "react-icons/si";

interface Skill {
  name: string;
  icon: ReactNode;
  color: string;
}

const skills: Skill[] = [
  { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500" },
  { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-500" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-teal-400" },
  { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
  { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-600" },
  { name: "React", icon: <FaReact />, color: "text-blue-400" },
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-600" },
  { name: "Express.js", icon: <SiExpress />, color: "text-gray-400" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
  { name: "Jest", icon: <SiJest />, color: "text-red-500" },
  { name: "Git", icon: <FaGit />, color: "text-orange-600" },
  { name: "GitHub", icon: <FaGithub />, color: "text-white" },
  { name: "MySQL", icon: <SiMysql />, color: "text-blue-700" },
  { name: "Docker", icon: <FaDocker />, color: "text-blue-500" },
];

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Set once: false to re-trigger animation when scrolling back up
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0, filter: "blur(10px)" },
    visible: { 
      y: 0, 
      opacity: 1, 
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } 
    },
  };

  const skillIconVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { type: "spring", stiffness: 260, damping: 20 }
    },
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Resume.pdf";
    link.download = "Sreesanth_Resume.pdf";
    link.click();
  };

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center justify-center py-20 px-6 overflow-hidden bg-[#030303]"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[70%] lg:w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[70%] lg:w-[50%] h-[50%] bg-purple-900/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        // Conditional animation based on isInView for bidirectional scroll
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
      >
        
        {/* Left Side: Text Content */}
        <motion.div variants={itemVariants} className="space-y-8">
          <div className="space-y-4">
            <motion.h2 className="text-4xl lg:text-5xl font-black tracking-tight text-white flex items-center gap-4 uppercase">
              About Me
              <div className="h-px flex-1 bg-linear-to-r from-blue-500 to-transparent opacity-50" />
            </motion.h2>
            <p className="text-gray-400 text-lg lg:text-xl leading-relaxed font-light">
              I'm <span className="text-white font-medium">SREESANTH M</span>, a 
              forward-thinking <span className="text-blue-400">MERN Stack Developer</span>. 
              I specialize in crafting high-performance web ecosystems where 
              clean code meets exceptional user experience.
            </p>
            <p className="text-gray-500 text-md leading-relaxed">
              My approach blends technical precision with creative problem solving, 
              ensuring every application is not just functional, but scalable and 
              delightful to use.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={downloadResume}
            className="group relative px-8 py-4 bg-white text-black rounded-xl font-bold transition-all overflow-hidden flex items-center gap-3"
          >
            <span className="relative z-10">DOWNLOAD RESUME</span>
            <div className="absolute inset-0 bg-linear-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-10 transition-opacity" />
          </motion.button>
        </motion.div>

        {/* Right Side: Skills Cloud */}
        <motion.div 
          className="grid grid-cols-4 sm:grid-cols-5 gap-4 lg:gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={skillIconVariants}
              whileHover={{ 
                y: -5, 
                backgroundColor: "rgba(255,255,255,0.05)",
                borderColor: "rgba(255,255,255,0.2)" 
              }}
              className="group aspect-square flex flex-col items-center justify-center rounded-2xl border border-white/5 backdrop-blur-sm transition-colors cursor-default relative"
            >
              <div className={`text-3xl lg:text-4xl ${skill.color} transition-transform duration-300 group-hover:scale-110`}>
                {skill.icon}
              </div>
              <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 group-hover:-bottom-6 text-[10px] font-mono text-gray-500 transition-all uppercase tracking-widest">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;