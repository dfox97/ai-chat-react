import React from 'react';
import './ChatWindow.css';

interface Message {
  id: number;
  sender: string;
  content: string;
}

export interface ChatWindowProps {
  messages: Message[];
}


const ChatWindow: React.FC<ChatWindowProps> = ({ messages }) => {
  return (
    <div className="chat-window">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`message ${message.sender === 'Alice' ? 'sender' : 'receiver'}`}
        >
          <div className="message-content">
            <strong>{message.sender}:</strong> {message.content}
          </div>
        </div>
      ))}
    </div>
  )
};

export default ChatWindow;
