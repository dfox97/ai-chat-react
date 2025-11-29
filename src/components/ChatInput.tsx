import React, { useState } from 'react';
import './ChatInput.css';

interface ChatInputProps {
  onSend: (content: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSend }) => {
  const [value, setValue] = useState("");

  return (
    <div className="component-wrapper">
      <div className="input-wrapper">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter message..."
        />
        <button
          className="send-button"
          onClick={() => {
            onSend(value);
            setValue("");
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
