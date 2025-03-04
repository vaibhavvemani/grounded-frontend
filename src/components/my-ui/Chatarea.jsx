"use client"

import { useEffect, useState } from "react";

export default function Chatarea( {url, query} ) {

  const [chatMessages, setMessages] = useState([]);

  async function fetchResponse() {
    if (!url || !query) return;

    setMessages((prevMessages) => [
      ...prevMessages,
      {sender: "user", message: query}
    ])

    try {
      const response = await fetch("/api/web", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          url: url,
          query: query,
          session_id: "test",
        }),
      });
      const data = await response.json();
      console.log(data);

      setMessages((prevMessages) => [
        ...prevMessages,
        {sender: "bot", message: data.message}
      ])

      console.log(chatMessages);
    } catch(error) {
      console.log(error);
    }

  }

  useEffect(() => {

    fetchResponse();

  }, [url, query]);




  return (
    <div className="w-[60%] h-[80%] p-5 border-[2px] border-black rounded-lg">
      {chatMessages.map((message, index) => (
        <div 
          key={index}
          className={`p-3 rounded-lg max-w-xl mb-3 ${
            message.sender === "user" 
            ? "bg-white text-black ml-auto"
            : "bg-black text-white mr-auto"
          }`}>
            {message.message}
        </div>
      ))}
    </div>
  )
}
