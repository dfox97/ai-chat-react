import React, { useState } from 'react';
import './ChatInput.css';

const ChatInput: React.FC = () => {
  const [value, setValue] = useState('');


  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <div className='component-wrapper'>
      <div className='input-wrapper'>
        <label>
          <input
            type='text'
            value={value}
            onChange={handleChange}
            placeholder='Enter message...'
          />
        </label>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send"><path d="m22 2-7 20-4-9-9-4 20-7Z"/><path d="M22 2 11 13"/></svg>
        </button>
      </div>
    </div>
  )
}


export default ChatInput;
