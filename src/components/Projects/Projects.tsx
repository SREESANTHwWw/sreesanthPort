import { useState, useRef } from "react";
import { useInView, motion } from "framer-motion";

import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

const Projects = () => {
  const [index, setIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Dils Trades",
      description:
        " Dils Trades is a full-featured MERN e-commerce application offering secure authentication, complete product management, and a smooth shopping experience. It includes a robust cart system, order processing with payment integration, user profile management, and advanced search/filtering. Admins get a powerful dashboard to manage products, users, and orders. With a responsive React UI, optimized Express APIs, and secure MongoDB data handling, Dils Trades showcases strong full-stack skills and scalable e-commerce architecture.",
      image1: "/Dils.png",
      image2: "/dils2.png",
      link: "https://dils-trades.onrender.com/",
    },
    {
      id: 2,
      title: "RettroFit",
      description:
        "RettroFit is a specialized web platform developed to provide reverse engineering solutions for obsolete, damaged, or unavailable machine parts. The system enables industries to redesign and reproduce critical components when original manufacturers no longer support them, effectively addressing issues such as missing technical drawings, unavailable spare parts, and urgent replacement demands. RettroFit streamlines the process by collecting detailed part information, enabling engineers to analyze, redesign, and deliver accurate, manufacturable models, ensuring minimal downtime and improved operational efficiency for clients.",
      image1: "/rettro.png",
      image2: "/retto2.png",
      link: "https://rettrofit-fd.onrender.com/",
    },
  ];

  const next = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });
  const cardVar = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full  flex justify-center text-white" ref={ref}>
      <div className="flex flex-col items-center gap-10 mt-10 ">
        <h2 className="group text-4xl text-white transition duration-300 font-Saira font-semibold">
          Projects
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
        </h2>

    
        <div className="w-full max-w-7xl overflow-hidden relative">
      
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {projects.map((project) => (
              <motion.div
                variants={cardVar}
                initial="hidden"
                animate={isInView ? "show"  : {}}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="min-w-full max-w-full grid sm:grid-cols-2 grid-cols-1 gap-8 p-6"
              >
   
                <div className="flex flex-col p-10 gap-10 bg-black/70 rounded-2xl">
                  <div className="flex justify-between">
                    <h3 className="sm:text-3xl text-2xl font-bold mb-4 font-Saira">
                      {project.title}
                    </h3>

                    <button className="sm:w-32 w-20 sm:h-10 h-10 rounded-2xl bg-amber-50 text-black sm:text-xl text-xl font-Saira font-bold">
                      <a href={project.link}>Visit</a>
                    </button>
                  </div>

                  <p className="text-white font-Saira">{project.description}</p>

                  <div className="flex justify-between gap-6">
                    <button onClick={prev}>
                      <FaArrowCircleLeft size={22} />
                    </button>

                    <button onClick={next}>
                      <FaArrowCircleRight size={22} />
                    </button>
                  </div>
                </div>

         
                <div className="grid gap-5">
                  <img
                    src={project.image1}
                    alt={project.title}
                    className="w-full sm:h-[250px] object-cover rounded-lg"
                  />

                  <img
                    src={project.image2}
                    alt={project.title}
                    className="w-full h-[250px] object-cover rounded-lg"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
