import React from 'react';
import './ChatWindow.css';

export interface Message {
  id: number;
  role: 'user' | 'assistant';
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
          className={`message ${message.role === 'user' ? 'sender' : 'receiver'}`}
        >
          <div className="message-content">
            <strong>{message.role === 'user' ? 'You' : 'Assistant'}:</strong> {message.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatWindow;
