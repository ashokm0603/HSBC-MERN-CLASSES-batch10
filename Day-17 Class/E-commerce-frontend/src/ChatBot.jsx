import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { motion, AnimatePresence } from "framer-motion";

const ChatBot = () => {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to the latest message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isLoading, isOpen]);

  const sendPrompt = async () => {
    if (!prompt.trim()) return;

    const userMessage = { role: "user", text: prompt };
    setMessages((prev) => [...prev, userMessage]);
    setPrompt("");
    setIsLoading(true);

    try {
      const response = await axios.post("http://localhost:4000/api/prompt", {
        prompt: userMessage.text,
      });
      const aiMessage = { role: "ai", text: response.data.response };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.log(error);
      const errMessage = {
        role: "ai",
        text: "⚠️ Something went wrong. Please try again.",
        isError: true,
      };
      setMessages((prev) => [...prev, errMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendPrompt();
    }
  };

  return (
    <div id="chatbot-outer-container">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="chatbot-wrapper"
            initial={{ opacity: 0, scale: 0.8, y: 20, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Header */}
            <div id="chatbot-header">
              <div id="chatbot-header-content">
                <div id="chatbot-header-icon">🤖</div>
                <div>
                  <h2 id="chatbot-title">AI Assistant</h2>
                  <p id="chatbot-subtitle">Powered by Gemini</p>
                </div>
              </div>
              <button id="chatbot-close-btn" onClick={() => setIsOpen(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </button>
            </div>

            {/* Messages Area */}
            <div id="chatbot-messages-container">
              {messages.length === 0 && (
                <div id="chatbot-empty-state">
                  <span id="chatbot-empty-icon">💬</span>
                  <p>Ask me anything! I'm here to help you manage the dashboard.</p>
                </div>
              )}

              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`chatbot-msg-row ${msg.role === "user" ? "chatbot-user-row" : "chatbot-ai-row"}`}
                >
                  <div className={`chatbot-bubble ${msg.role === "user" ? "chatbot-user-bubble" : "chatbot-ai-bubble"} ${msg.isError ? "chatbot-error-bubble" : ""}`}>
                    {msg.role === "user" ? (
                      <p style={{margin: 0}}>{msg.text}</p>
                    ) : (
                      <div className="chatbot-markdown-body">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                          {msg.text}
                        </ReactMarkdown>
                      </div>
                    )}
                  </div>
                  <div className={`chatbot-avatar ${msg.role === "user" ? "chatbot-user-avatar" : "chatbot-ai-avatar"}`}>
                    {msg.role === "user" ? "👤" : "🤖"}
                  </div>
                </div>
              ))}

              {/* Loading indicator */}
              {isLoading && (
                <div className="chatbot-msg-row chatbot-ai-row">
                  <div className="chatbot-bubble chatbot-ai-bubble">
                    <div className="chatbot-typing">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div className="chatbot-avatar chatbot-ai-avatar">🤖</div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div id="chatbot-input-container">
              <input
                id="chatbot-input"
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a message..."
                disabled={isLoading}
              />
              <button id="chatbot-send-btn" onClick={sendPrompt} disabled={isLoading || !prompt.trim()}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        id="chatbot-toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        ) : (
          "🤖"
        )}
        {!isOpen && messages.length === 0 && <span className="pulse-indicator"></span>}
      </motion.button>
    </div>
  );
};

export default ChatBot;

