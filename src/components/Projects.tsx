import { projects } from "../data/projects";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Projects
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300"
            >

              <h3 className="text-xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-4">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-4 justify-center">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm bg-gray-800 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex justify-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  className="text-sm underline hover:text-gray-300"
                >
                  GitHub
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    className="text-sm underline hover:text-gray-300"
                  >
                    Live
                  </a>
                )}
              </div>

            </motion.div>

          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;