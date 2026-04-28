import { motion } from "framer-motion";

const skills = [
  {
    title: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "Vite"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "MongoDB"],
  },
  {
    title: "Automation",
    items: ["Selenium", "Playwright", "TestNG"],
  },
  {
    title: "Tools",
    items: ["Git", "Docker", "Jenkins"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Skills
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-4">
                {skill.title}
              </h3>

              <ul className="text-gray-400 space-y-2">
                {skill.items.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;