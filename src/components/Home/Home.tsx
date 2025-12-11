import TextaniMation from "../Functions/TextAnimationFun/TextaniMation";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center s   text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 items-center  sm:mt-0 mt-20 h-full gap-10">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full h-[40vh] flex justify-center   rounded-2xl"
        >
          <div className="flex justify-center md:w-[50%] w-[80%] h-[40vh] rounded-2xl border-2 bo   object-fill  bg-black/80 ">
            <img src="/mypick.png" alt="" className="h-64 object-cover " />
          </div>
        </motion.div>

        <div className="mb-32 sm:mb-0 px-6 sm:px-0 text-center gap-9 sm:text-left">
          <h1 className="text-3xl sm:text-5xl mb-4 font-Saira">
            Hi, I'm SREESANTH M
          </h1>
          <p className="text-2xl font-Saira">
            <TextaniMation
              words={[
                "A Passionate MERN Stack Developer",
                "Building Modern Web Apps",
                "React, Node, MongoDB Expert",
              ]}
            />
          </p>
          <div className="flex gap-20 mt-10  text-3xl sm:justify-start justify-center">
            <button className="cursor-pointer">
              {" "}
              <a href="https://github.com/SREESANTHwWw">
                <BsGithub />
              </a>
            </button>
            <button className="cursor-pointer">
              <a href="https://www.linkedin.com/in/sreesanth-m-a09162229/">
                <FaLinkedin />
              </a>
            </button>
            <button className="cursor-pointer">
              <a href="https://x.com/BenfattoGa98605">
                <FaXTwitter />
              </a>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
