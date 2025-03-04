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
        body: JSON.stringify({
          url: url,
          query: query,
          session_id: "test",
        }),
      });
      const data = await response.json();
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
      <p>{chatreply}</p>
    </div>
  )
}
