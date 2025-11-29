import React from 'react';
import './ChatWindow.css';

interface Message {
  id: number;
  sender: string;
  content: string;
}

export interface ChatWindowProps {
  messages: Message[];
  chatWindowRef: React.RefObject<HTMLDivElement | null>;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ messages, chatWindowRef }) => {
  return (
    <div className="chat-window" ref={chatWindowRef}>
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
  );
};

export default ChatWindow;
