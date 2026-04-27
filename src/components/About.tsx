const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-black text-white">
      <div className="max-w-5xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          About Me
        </h2>

        {/* Description */}
        <p className="text-gray-400 leading-relaxed max-w-3xl mx-auto">
          I'm a passionate QA Automation Engineer and Full Stack Developer 
          with experience in building scalable web applications and robust 
          automation frameworks. I specialize in writing clean, maintainable 
          code and solving real-world problems using modern technologies.
        </p>

        <p className="text-gray-400 leading-relaxed max-w-3xl mx-auto mt-4">
          With hands-on experience in automation testing and MERN stack 
          development, I enjoy creating efficient solutions that improve 
          performance, reliability, and user experience.
        </p>

      </div>
    </section>
  );
};

export default About;