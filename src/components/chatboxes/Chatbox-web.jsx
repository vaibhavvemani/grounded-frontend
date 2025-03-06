"use client"

import { Input } from "@/components/ui/input";

import { useEffect, useState } from "react";

export default function Chatbox() {

  const [chatMessages, setMessages] = useState([]);
  const [url, setUrl] = useState("");
  const [query, setQuery] = useState("");

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
          session_id: url,
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

  function submitData(e) {

    e.preventDefault();

    const formData = new FormData(e.target);
    const url = formData.get("url");
    const query = formData.get("query");

    setUrl(url);
    setQuery(query);
  }

  useEffect(() => {

    fetchResponse();

  }, [url, query]);



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
        <form onSubmit={submitData}>
          <Input className="mb-3" 
            name="url"
            placeholder="Enter your url" />
          <Input className="mb-3" 
            name="query"
            placeholder="Who is Mahesh Baabu" />
          <button className="border-[2px] border-black w-[20%]" 
            type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>

  )
}
