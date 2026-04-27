const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Contact Me
        </h2>

        <p className="text-gray-400 mb-10">
          Feel free to reach out for opportunities, collaborations, or just a chat 👋
        </p>

        {/* Form */}
        <form className="flex flex-col gap-4 text-left">

          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-white"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-white"
          />

          <textarea
            placeholder="Your Message"
            rows={5}
            className="p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-white"
          ></textarea>

          <button
            type="submit"
            className="bg-white text-black py-3 rounded-lg hover:bg-gray-200 transition duration-300"
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
};

export default Contact;