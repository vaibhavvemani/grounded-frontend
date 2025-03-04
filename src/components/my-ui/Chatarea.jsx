"use client"

import { useEffect, useState } from "react";

export default function Chatarea( {url, query} ) {

  const [chatreply, setChatreply] = useState("");

  async function fetchResponse() {

    try {
      const response = await fetch("/api/web", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: {
          url: url,
          query: query,
          session_id: "test",
        }
      });
      data = await response.json();
      console.log(data);
      setChatreply(data);
    } catch(error) {
      console.log(error);
    }

  }

  useEffect(() => {

    fetchResponse();

  }, [url, query]);




  return (
    <div className="w-[60%] h-[80%] p-5 border-[2px] border-black">
      <h1>Chat with Assistant</h1>
    </div>
  )
}
