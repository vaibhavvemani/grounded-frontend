"use client"

import { Input } from "@/components/ui/input";

import { useEffect, useState } from "react";

export default function Chatbox() {

  const [chatMessages, setMessages] = useState([]);
  const [file, setFile] = useState(null);
  const [query, setQuery] = useState("");


  async function fetchResponse() {
    if (!file || !query) return;

    setMessages((prevMessages) => [
      ...prevMessages,
      {sender: "user", message: query}
    ])

    let formData = new FormData();
    formData.append("file", file);
    formData.append("question", query)

    try {
      const response = await fetch("/api/pdf", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      setMessages((prevMessages) => [
        ...prevMessages,
        {sender: "bot", message: data.message}
      ])

    } catch(error) {
      console.log(error);
    }

  }

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="relative pl-20 pr-20 h-[90vh] w-[100vw] self-center flex items-center justify-center gap-8">
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
      <div className="h-[80%] w-[40%] p-5 border-[2px] border-black">
        <input
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}/>
        <Input className="mb-3" 
          name="query"
          placeholder="Who is Mahesh Baabu" 
          onChange={(e) => setQuery(e.target.value)}/>
        <button className="border-[2px] border-black w-[20%]" 
          onClick={fetchResponse}>
          Chat
        </button>
      </div>
    </div>

  )
}
