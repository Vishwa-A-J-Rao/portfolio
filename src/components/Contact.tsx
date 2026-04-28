import { useState } from "react";

const Contact = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: any) => {
  e.preventDefault();

  const res = await fetch("http://localhost:8080/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });

  const data = await res.json();

  if (data.status === "success") {
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  } else {
    alert("Failed to send message");
  }
};

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
        <form className="flex flex-col gap-4 text-left" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-white"
          />

          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-white"
          />

          <textarea
            placeholder="Your Message"
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
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