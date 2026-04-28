import { useState } from "react";

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi! Ask me anything about Vishwajith 👋" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };

    setMessages((prev) => [...prev, userMessage]);

    const res = await fetch("http://localhost:8080/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();

    const botMessage = {
      role: "bot",
      text: data.reply,
    };

    setMessages((prev) => [...prev, botMessage]);
    setInput("");
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-white text-black px-4 py-2 rounded-full shadow-lg"
      >
        💬
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-20 right-6 w-80 bg-gray-900 text-white rounded-2xl shadow-xl flex flex-col">

          {/* Header */}
          <div className="p-4 border-b border-gray-700 font-semibold">
            AI Assistant
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-2 max-h-80">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg text-sm ${msg.role === "user"
                    ? "bg-white text-black self-end"
                    : "bg-gray-800"
                  }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-2 border-t border-gray-700 flex">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 p-2 bg-gray-800 rounded-l-lg outline-none"
              placeholder="Ask something..."
            />
            <button
              onClick={handleSend}
              className="bg-white text-black px-4 rounded-r-lg"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;