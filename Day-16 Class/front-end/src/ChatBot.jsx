import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const ChatBot = () => {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to the latest message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

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
    <div id="main-container">
      <div id="chat-wrapper">
        {/* Header */}
        <div id="chat-header">
          <div id="chat-header-icon">🤖</div>
          <div>
            <h2 id="chat-title">AI Assistant</h2>
            <p id="chat-subtitle">Powered by Gemini</p>
          </div>
        </div>

        {/* Messages Area */}
        <div id="response-container">
          {messages.length === 0 && (
            <div id="empty-state">
              <span id="empty-icon">💬</span>
              <p>Ask me anything! I'll respond with formatted answers.</p>
            </div>
          )}

          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message-row ${msg.role === "user" ? "user-row" : "ai-row"}`}
            >
              <div className={`message-bubble ${msg.role === "user" ? "user-bubble" : "ai-bubble"} ${msg.isError ? "error-bubble" : ""}`}>
                {msg.role === "user" ? (
                  <p className="user-text">{msg.text}</p>
                ) : (
                  <div className="markdown-body">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {msg.text}
                    </ReactMarkdown>
                  </div>
                )}
              </div>
              <div className={`avatar ${msg.role === "user" ? "user-avatar" : "ai-avatar"}`}>
                {msg.role === "user" ? "👤" : "🤖"}
              </div>
            </div>
          ))}

          {/* Loading indicator */}
          {isLoading && (
            <div className="message-row ai-row">
              <div className="message-bubble ai-bubble">
                <div id="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="avatar ai-avatar">🤖</div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div id="input-container">
          <input
            id="prompt-input"
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask something... (Enter to send)"
            disabled={isLoading}
          />
          <button id="send-btn" onClick={sendPrompt} disabled={isLoading || !prompt.trim()}>
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
      </div>
    </div>
  );
};

export default ChatBot;
