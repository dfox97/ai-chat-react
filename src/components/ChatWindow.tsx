import React from 'react';

export interface ChatWindowProps {
  messages: { id: number; text: string; sender: string }[];
}

const ChatWindow: React.FC<ChatWindowProps> = ({ messages }) => {
  return (
    <div>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>
            <strong>{message.sender}:</strong> {message.text}
          </li>
        ))}
      </ul>
    </div>
  )
};

export default ChatWindow;
