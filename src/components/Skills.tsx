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
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-2xl hover:scale-105 transition duration-300 shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">
                {skill.title}
              </h3>

              <ul className="text-gray-400 space-y-2">
                {skill.items.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;