import { useState } from "react";
import emailjs from "emailjs-com";
import { motion, type Variants } from "framer-motion";
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    emailjs.send("service_gb5ldzd", "template_5j5myka", form, "Xr8Df2ZzKjdft0x7Z")
      .then(() => {
        alert("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Failed to send message."))
      .finally(() => setIsSending(false));
  };

  // --- Animation Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      staggerChildren: 0.2, 
      duration: 0.8, 
      // Add 'as const' here to solve the Type 'string' error
      ease: "easeIn" as const 
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.5, 
      ease: "easeIn" as const // And here
    } 
  },
};

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center py-24 px-6 overflow-hidden bg-[#030303]">
      {/* Background Stays Consistent */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[70%] lg:w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[70%] lg:w-[50%] h-[50%] bg-purple-900/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        // viewport configuration for scroll detection
        viewport={{ once: false, amount: 0.2 }} 
        className="relative z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16"
      >
        {/* Left Side: Contact Info */}
        <motion.div variants={itemVariants} className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-white flex items-center gap-4">
              GET IN TOUCH
              <div className="h-px flex-1 bg-linear-to-r from-blue-500 to-transparent opacity-50" />
            </h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              Have a project in mind? Feel free to reach out. I'm open to discussing new opportunities.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-gray-400">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400">
                <FaEnvelope />
              </div>
              <div>
                <p className="text-xs font-mono tracking-widest uppercase">Email</p>
                <p className="text-white font-medium">sreesanth.m40@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-gray-400">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p className="text-xs font-mono tracking-widest uppercase">Location</p>
                <p className="text-white font-medium">Kerala, India</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.div variants={itemVariants}>
          <form
            onSubmit={handleSubmit}
            className="p-8 lg:p-10 rounded-3xl  border border-white/5 backdrop-blur-xl space-y-6"
          >
            <div className="space-y-2">
              <label className="text-xs font-mono text-gray-500 uppercase tracking-widest ml-1">Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-blue-500/50  transition-all"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-gray-500 uppercase tracking-widest ml-1">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-blue-500/50  transition-all"
                placeholder="email@example.com"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-gray-500 uppercase tracking-widest ml-1">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-blue-500/50  transition-all h-32 resize-none"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSending}
              type="submit"
              className="w-full group relative py-4 cursor-pointer bg-white text-black rounded-xl font-bold flex items-center justify-center gap-2 overflow-hidden disabled:opacity-50"
            >
              <span className="relative z-10 uppercase tracking-wider">
                {isSending ? "Sending..." : "Send Message"}
              </span>
              <FaPaperPlane size={14} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              <div className="absolute inset-0 bg-linear-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;