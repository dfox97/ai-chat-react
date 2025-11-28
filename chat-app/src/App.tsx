import { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import ChatInput from './components/ChatInput';
import './App.css';

function App() {
  const [messages, setMessages] = useState<{ id: number; text: string; sender: string }[]>(
    []
  );
  const [messageId, setMessageId] = useState(0);

  const handleSendMessage = (text: string) => {
    const newMessage = { id: messageId, text, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setMessageId((prevId) => prevId + 1);
    // Simulate a response from another user
    setTimeout(() => {
      const botMessage = { id: messageId + 1, text: `Echo: ${text}`, sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
      setMessageId((prevId) => prevId + 2);
    }, 500);
  };

  return (
    <div className="App">
      <h1>Simple Chat</h1>
      <ChatWindow messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
}

export default App;
