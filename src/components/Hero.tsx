import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4 pt-20">

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold"
      >
        Hi, I'm{" "}
        <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
          Vishwajith
        </span> 👋
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-4 text-lg md:text-xl text-gray-400 max-w-xl"
      >
        QA Automation Engineer | Full Stack Developer
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-8 flex gap-4"
      >
        <a href="#projects" className="bg-white text-black px-6 py-2 rounded-full">
          View Projects
        </a>
        <a href="/resume.pdf" className="border border-white px-6 py-2 rounded-full">
          Download Resume
        </a>
      </motion.div>

    </section>
  );
};

export default Hero;