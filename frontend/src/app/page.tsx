"use client";

import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ text: string; sender: string }[]>([]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "User" };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await axios.post("http://127.0.0.1:8000/chat", { text: input });
      setMessages((prev) => [...prev, { text: response.data.response, sender: "AI" }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [...prev, { text: "Error getting response.", sender: "AI" }]);
    }

    setInput("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <div className="w-full max-w-lg bg-gray-800 p-4 rounded-lg shadow-lg">
        <h1 className="text-xl font-bold text-center mb-4">Chat with Mistral 7B</h1>
        <div className="h-80 overflow-y-auto p-2 border border-gray-700 rounded mb-4">
          {messages.map((msg, index) => (
            <div key={index} className={`mb-2 ${msg.sender === "User" ? "text-right" : "text-left"}`}>
              <strong className={msg.sender === "User" ? "text-blue-400" : "text-green-400"}>{msg.sender}:</strong> {msg.text}
            </div>
          ))}
        </div>
        <div className="flex">
          <input
            type="text"
            className="flex-1 p-2 border border-gray-600 rounded bg-gray-700 text-white"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            className="ml-2 px-4 py-2 bg-blue-500 rounded text-white hover:bg-blue-600"
            onClick={sendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
