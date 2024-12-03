import React, { useState } from "react";

function Five() {
  const [name, setName] = useState(""); 
  const [message, setMessage] = useState(""); 
  const [messages, setMessages] = useState([]); 


  const sendMessage = (e) => {
    e.preventDefault();
    if (name && message) {
      const newMessage = { id: Date.now(), name, message };
      setMessages([newMessage, ...messages]);
      setMessage(""); 
    }
  };

  const deleteMessage = (id) => {
    setMessages(messages.filter((msg) => msg.id !== id));   
  };

  return (
    <div className="max-w-2xl mx-auto p-5">
      <h1 className="text-2xl font-bold mb-4">Xabarlar Bo'limi</h1>
      
      <form onSubmit={sendMessage} className="mb-4">
        <div className="flex gap-4 mb-3">
          <input
            type="text"
            placeholder="Ismingiz"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-1/3 p-2 border rounded-md"
          />
          <input
            type="text"
            placeholder="Xabar matni"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-grow p-2 border rounded-md"
          />
          <button 
            type="submit" 
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            Yuborish
          </button>
        </div>
      </form>

      <h2 className="text-xl font-semibold">Xabarlar:</h2>
      <ul className="space-y-4">
        {messages.map((msg) => (
          <li key={msg.id} className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
            <div>
              <strong>{msg.name}: </strong>{msg.message}
            </div>
            <button 
              onClick={() => deleteMessage(msg.id)} 
              className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
            >
              O'chirish
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Five;
