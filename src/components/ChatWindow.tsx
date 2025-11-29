import React from 'react';

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
    <div>
      {messages.map((message) => (
        <p key={message.id}>
          <strong>{message.sender}:</strong> {message.content}
        </p>
      ))}
    </div>
  )
};

export default ChatWindow;
