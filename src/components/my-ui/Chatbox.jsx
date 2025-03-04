"use client"

import Chatarea from "@/components/my-ui/Chatarea";
import Inputarea from "@/components/my-ui/Inputarea";

import { useState } from "react";

export default function Chatbox() {

  const [url, setUrl] = useState("");
  const [query, setQuery] = useState("");

  return (
    <div className="relative pl-20 pr-20 h-[90vh] w-[100vw] self-center flex items-center justify-center gap-8">
      <Chatarea url={url} query={query}/>
      <Inputarea setUrl={setUrl} setQuery={setQuery}/>
    </div>

  )
}
