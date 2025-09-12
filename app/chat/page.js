"use client";

import { useState, useRef, useEffect } from "react";

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi there! 👋 How can we help you today?" },
  ]);
  const [userInput, setUserInput] = useState("");
  const messagesEndRef = useRef(null);

  const handleSend = () => {
    if (!userInput.trim()) return;

    const message = userInput.trim();
    setMessages((prev) => [...prev, { from: "user", text: message }]);
    setUserInput("");

    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "Thanks! We’ll get back to you shortly 🐶",
        },
      ]);
    }, 800);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <main className="w-full min-h-screen bg-[#0e0e0d] flex justify-center items-center px-4 py-6">
      <div className="w-full max-w-md h-[90vh] bg-white rounded-lg shadow-lg flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-[#075E54] text-white px-4 py-3 flex justify-between items-center">
          <h1 className="text-lg font-semibold">Dog Support Chat</h1>
          <span className="text-sm opacity-80">Online</span>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 bg-[#e5ddd5]">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`max-w-[75%] px-4 py-2 rounded-xl text-sm shadow ${
                msg.from === "user"
                  ? "ml-auto bg-[#dcf8c6] text-black rounded-br-none"
                  : "mr-auto bg-white text-black rounded-bl-none"
              }`}
            >
              {msg.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="bg-white border-t text-black border-gray-300 px-4 py-3 flex gap-2">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type a message"
            className="flex-1 px-4 py-2 text-sm rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <button
            onClick={handleSend}
            className="bg-[#075E54] text-white px-4 py-2 rounded-full hover:bg-[#064C47] transition"
          >
            Send
          </button>
        </div>
      </div>
    </main>
  );
}
