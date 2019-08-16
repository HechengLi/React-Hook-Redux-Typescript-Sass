import React from 'react'
import { UpdateMessageParam } from './index'

interface ChatInterfaceProps {
  message: string
  username: string
  sendMessage: (message: string) => void
  updateMessage: (event: UpdateMessageParam) => void
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({
  username,
  message,
  updateMessage,
  sendMessage
}) => {
  function keyPress(e: React.KeyboardEvent<any>) {
    if (e.key === 'Enter') {
      send()
    }
  }

  function send() {
    sendMessage(message)
  }

  return (
    <div className="chat-interface">
      <h3>User: {username}</h3>
      <input
        value={message}
        onChange={updateMessage}
        onKeyPress={keyPress}
        className="chat-input"
        placeholder="Type a message..."
      />
      <button onClick={send}>Send</button>
    </div>
  )
}

export default ChatInterface
