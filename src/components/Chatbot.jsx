"use client";
import { useState, useRef, useEffect } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  // Auto scroll
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);

    setLoading(true);

    try {
      console.log("API_URL 👉", API_URL);

      const res = await fetch(`API_URL/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });

      console.log("STATUS 👉", res.status);

      if (!res.ok) {
        throw new Error("API failed");
      }

      const data = await res.json();

      console.log("DATA 👉", data);

      const botMsg = {
        sender: "bot",
        text: data.reply || "No response from AI 😢",
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      console.log("ERROR 👉", error);

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Server not responding 😢 (check backend)",
        },
      ]);
    }

    setLoading(false);
    setInput("");
  };

  return (
    <div className="fixed bottom-5 right-5 w-80 bg-white shadow-xl rounded-2xl p-4">
      
      {/* Header */}
      <div className="font-semibold mb-2 text-center">
        💬 Hina Assistant
      </div>

      {/* Messages */}
      <div className="h-64 overflow-y-auto mb-3 space-y-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <p
              className={`px-3 py-2 rounded-xl text-sm max-w-[75%] ${
                msg.sender === "user"
                  ? "bg-black text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              {msg.text}
            </p>
          </div>
        ))}

        {/* Typing */}
        {loading && (
          <p className="text-sm text-gray-500">🤖 Typing...</p>
        )}

        <div ref={chatEndRef}></div>
      </div>

      {/* Input */}
      <div className="flex gap-2">
        <input
          className="border p-2 w-full rounded-lg text-sm"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about Hina..."
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="bg-black text-white px-4 rounded-lg text-sm"
        >
          Send
        </button>
      </div>
    </div>
  );
}