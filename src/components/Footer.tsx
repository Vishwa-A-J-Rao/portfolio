const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 py-10 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Name */}
        <h2 className="text-xl font-semibold text-white mb-2">
          Vishwajith
        </h2>

        <p className="mb-6">
          QA Automation Engineer | Full Stack Developer
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://github.com/your-profile"
            target="_blank"
            className="hover:text-white transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:yourmail@gmail.com"
            className="hover:text-white transition"
          >
            Email
          </a>
        </div>

        {/* Bottom line */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Vishwajith. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;