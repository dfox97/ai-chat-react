import { useQuery } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';
import './App.css'
import ChatWindow, { type ChatWindowProps } from './components/ChatWindow'
import ChatInput from './components/ChatInput';

export const fetchMockMessages = async (): Promise<ChatWindowProps['messages']> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, sender: 'Alice', content: 'Hello!' },
        { id: 2, sender: 'Bob', content: 'Hi there!' },
        { id: 3, sender: 'Alice', content: 'How are you?' },
      ]);
    }, 1000);
  });
};

function App() {
  const { data, isLoading, error } = useQuery<ChatWindowProps['messages']>({
    queryKey: ['messages'],
    queryFn: fetchMockMessages,
  });

  const chatWindowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [data]);

  if (error) return <p>Error loading messages</p>;

  if (!data || isLoading) return <p>Loading...</p>;

  return (
    <div className="App">
      <div className="chat-wrapper">
        <ChatWindow messages={data} chatWindowRef={chatWindowRef} />
        <ChatInput />
      </div>
    </div>
  );
}


export default App
