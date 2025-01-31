import React, { useState } from 'react'
import chatBotImage from '../../images/Chatbot_img.png'

const ChatBot = () => {
    const [isChat, setIschat] = useState(false)
    const [messages, setMessages] = useState([
        { text: "Hello! How can I help you today?", sender: "bot" },
      ]);
      const [input, setInput] = useState("");
    
      const handleSend = () => {
        if (input.trim() === "") return;
        const newMessages = [...messages, { text: input, sender: "user" }];
        setMessages(newMessages);
        setInput("");
    
        setTimeout(() => {
          const botResponse = getBotResponse(input);
          setMessages([...newMessages, { text: botResponse, sender: "bot" }]);
        }, 1000);
      };
    
      const getBotResponse = (message) => {
        const responses = {
          hello: "Hi there! How can I assist you?",
          how: "I'm just a bot, but I'm doing well!",
          bye: "Goodbye! Have a great day!",
        };
        
        const lowerCaseMessage = message.toLowerCase();
        return responses[lowerCaseMessage] || "I'm not sure how to respond to that.";
      };
    
  return (
    <div className="container mt-4 chat-bot">
        <div className='row'>
            <div className='chat-bot-image' onClick={()=>setIschat(!isChat)}>
                <img src={chatBotImage}/>
            </div>
            {isChat && 
                <div className="card" style={{ width: "400px" }}>
                    <div className="card-body" style={{ height: "300px", overflowY: "auto" }}>
                    {messages.map((msg, index) => (
                        <div
                        key={index}
                        className={`alert ${msg.sender === "bot" ? "alert-primary" : "alert-secondary"}`}
                        >
                        <strong>{msg.sender === "bot" ? "Bot" : "You"}:</strong> {msg.text}
                        </div>
                    ))}
                    </div>
                    <div className="card-footer">
                    <div className="input-group d-flex flex-column">
                        <input
                        type="text"
                        className="form-control w-100"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type a message..."
                        />
                        <button className="btn btn-primary" onClick={handleSend}>Send</button>
                    </div>
                    </div>
                </div>
            }
        </div>
    </div>
  )
}

export default ChatBot