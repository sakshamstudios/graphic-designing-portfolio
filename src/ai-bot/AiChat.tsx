import React, { useState } from 'react';
import './style.css';

const AiChat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');

    try {
      const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': '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', // ✅ yaha apna key daalna
        },
        body: JSON.stringify({
          model: 'openai/gpt-3.5-turbo', // ✅ Free model
          messages: newMessages,
        }),
      });

      const data = await res.json();
      const aiMessage = data.choices?.[0]?.message;
      if (aiMessage) setMessages(prev => [...prev, aiMessage]);
    } catch (err) {
      console.error('❌ Error:', err);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">SakshamVerse AI</div>
      <div className="chat-box">
        {messages.map((msg, i) => (
          <div key={i} className={msg.role === 'user' ? 'user-msg' : 'ai-msg'}>
            {msg.content}
          </div>
        ))}
      </div>
      <div className="chat-input-box">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask SakshamVerse AI..."
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default AiChat;
