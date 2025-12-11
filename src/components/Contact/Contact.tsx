import { useState } from "react";
import emailjs from "emailjs-com";
import {  motion } from "framer-motion";
const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>  ) => {
    e.preventDefault();

    emailjs
      .send(
        "service_gb5ldzd",
        "template_5j5myka",
        form,
        "Xr8Df2ZzKjdft0x7Z"
      )
      .then(() => {
        alert("Message sent successfully!");
        setForm({ name: "", email: "", message: "" }); // clear form
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send message.");
      });
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <motion.div 
      initial={{ x: 0, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col w-[75%] gap-9">
        <h2 className="group text-4xl text-white font-semibold transition duration-300 font-Saira">
          Contact Me
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
        </h2>

        {/* FORM START */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col bg-black/70 items-center  rounded-2xl   w-full gap-10 p-10 mt-10  "
        >
          <input
            type="text" 
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="sm:w-96 w-62 h-10 rounded-lg px-4 border-2 text-white outline-none"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="sm:w-96 w-62 h-10 rounded-lg px-4 border-2 text-white outline-none"
            required
          />

          <textarea
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="sm:w-96 w-62 h-32 rounded-lg px-4 py-2 border-2 text-white outline-none resize-none"
            required
          ></textarea>

          <button
            type="submit"
            className="sm:w-32 w-24 cursor-pointer h-10 rounded-2xl bg-amber-50 text-black sm:text-xl border-2 text-xl font-Saira font-bold"
          >
            Send
          </button>
        </form>
        {/* FORM END */}

        <hr className="w-full h-0.5 bg-white mt-10" />
      </motion.div>
    </div>
  );
};

export default Contact;
