import { useQuery } from '@tanstack/react-query';
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

  if (error) return <p>Error loading messages</p>

  if (!data || isLoading) return <p>Loading...</p>

  return (
    <div>
      <h1> Simple chat app</h1>
      <ChatWindow messages={data} />
      <ChatInput />
    </div>
  )
}

export default App
