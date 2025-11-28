import './App.css'
import ChatWindow, { type ChatWindowProps } from './components/ChatWindow'


function App() {
  return (
    <div>
      <h1> Simple chat app</h1>
      <ChatWindow  {
        messages: [
      {id: 1, text: 'Hello!', sender: 'Alice' },
      {id: 2, text: 'Hi there!', sender: 'Bob' },
      {id: 3, text: 'How are you?', sender: 'Alice' },
      ] }/>

    </div>
  )
}

export default App
