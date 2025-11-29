import { useQuery } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';
import './App.css'
import ChatWindow, { type ChatWindowProps, type Message } from './components/ChatWindow'
import ChatInput from './components/ChatInput';
import { OpenRouter } from '@openrouter/sdk';

export const fetchMessages = async (openRouter: OpenRouter): Promise<ChatWindowProps['messages']> => {
  const response = await openRouter.chat.send({
    model: 'x-ai/grok-4.1-fast:free',
    messages: [],
    stream: false,
  });

  if (!response.choices[0].message?.content) {
    throw new Error('No content in response');
  }

  const message = response.choices[0].message.content;
  // make sure message is string
  if (typeof message !== 'string') {
    throw new Error('Message is not a string');
  }
  console.log('Received message:', message);

  return message.split('\n').map((line, index) => ({
    id: index + 1,
    role: 'assistant',
    content: line,
  }));
}

function App() {
  const openRouter = new OpenRouter({
    apiKey: import.meta.env.VITE_OPENROUTER_API_KEY
  });

  const [messages, setMessages] = useState<ChatWindowProps["messages"]>([]);
  const chatWindowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages]);

  async function sendMessage(content: string) {
    const userMessage = {
      id: Date.now(),
      role: "user" as const,
      content,
    };

    setMessages(prev => [...prev, userMessage]);

    const response = await openRouter.chat.send({
      model: "x-ai/grok-4.1-fast:free",
      messages: [
        ...messages.map(m => ({ role: m.role, content: m.content })),
        { role: "user", content }
      ],
      stream: false,
    });

    const assistantMessage = {
      id: Date.now() + 1,
      role: "assistant" as const,
      content: response.choices[0].message?.content || "",
    };

    setMessages((prev: any) => [...prev, assistantMessage]);
  }

  return (
    <div className="App">
      <div className="chat-header">Chat</div>
      <div className="chat-wrapper">
        <div className="chat-window-container">
          <ChatWindow messages={messages} chatWindowRef={chatWindowRef} />
        </div>

        <ChatInput onSend={sendMessage} />
      </div>
    </div>
  );
}

export default App;
