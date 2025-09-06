"use client";

import { useState, useRef, useEffect } from "react";

export default function FAQChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! Welcome to Dog Adoption Center chat. Do you want to adopt a dog? (yes/no)" },
  ]);
  const [input, setInput] = useState("");
  const [step, setStep] = useState(0); // Track conversation step
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input.trim().toLowerCase();
    setMessages((msgs) => [...msgs, { from: "user", text: input.trim() }]);
    setInput("");

    // Handle conversation flow based on step
    switch (step) {
      case 0: // Ask about adoption
        if (userMessage.includes("yes")) {
          addBotMessage("Great! Which breed of dog are you interested in?");
          setStep(1);
        } else if (userMessage.includes("no")) {
          addBotMessage("No worries! Would you like to donate to support our dog adoption center? (yes/no)");
          setStep(2);
        } else {
          addBotMessage("Please reply with 'yes' or 'no'. Do you want to adopt a dog?");
        }
        break;

      case 1: // Ask about breed
        addBotMessage(`Thanks for your interest in the ${input.trim()} breed! Would you also like to donate to support our center? (yes/no)`);
        setStep(2);
        break;

      case 2: // Ask about donation
        if (userMessage.includes("yes")) {
          addBotMessage("Thank you so much for your generosity! You can donate through our website anytime.");
        } else if (userMessage.includes("no")) {
          addBotMessage("No problem! Thank you for chatting with us.");
        } else {
          addBotMessage("Please reply with 'yes' or 'no'. Would you like to donate?");
          return; // don't increment step
        }
        setStep(3);
        break;

      case 3: // End conversation
        addBotMessage("If you have more questions, feel free to ask or browse our dogs anytime!");
        break;

      default:
        addBotMessage("I'm here to help! Feel free to ask me anything about dog adoption.");
    }
  };

  const addBotMessage = (text) => {
    setMessages((msgs) => [...msgs, { from: "bot", text }]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 bg-teal-600 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:bg-teal-700 transition"
        aria-label={open ? "Close chat" : "Open chat"}
      >
        {open ? (
          <span className="text-2xl font-bold">×</span>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16h6m-9 4h12a2 2 0 002-2v-8a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        )}
      </button>

      {open && (
        <div className="fixed bottom-20 right-6 z-50 w-80 max-h-[400px] bg-white rounded-lg shadow-lg flex flex-col">
          <div className="bg-teal-600 text-white px-4 py-3 rounded-t-lg font-semibold">
            Dog Adoption Chat
          </div>
          <div className="flex-1 p-3 overflow-y-auto space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[70%] px-3 py-2 rounded-lg ${
                    msg.from === "user"
                      ? "bg-teal-600 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-3 border-t flex gap-2">
            <textarea
              rows={1}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your answer..."
              className="flex-1 resize-none border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 text-black"
            />
            <button
              onClick={handleSend}
              className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
