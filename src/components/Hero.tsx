const Hero = () => {
    return (
        <section id="hero" className="h-screen flex flex-col justify-center items-center text-center px-4 pt-20 fade-in">            {/* Name */}
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Hi, I'm <span className="bg-gradient-to-r from-gray-300 via-white to-gray-400 bg-clip-text text-transparent">
                    Vishwajith
                </span> 👋
            </h1>

            {/* Role */}
            <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-xl">
                QA Automation Engineer | Full Stack Developer
                Building scalable apps & smart automation solutions
            </p>

            {/* Buttons */}
            <div className="mt-8 flex gap-4 flex-wrap justify-center">
                <a
                    href="#projects"
                    className="bg-white text-black px-6 py-2 rounded-full hover:scale-105 hover:bg-gray-200 transition duration-300"
                >
                    View Projects
                </a>

                <a
                    href="/resume.pdf"
                    className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black hover:scale-105 transition duration-300"
                >
                    Download Resume
                </a>
            </div>

        </section>
    );
};

export default Hero;