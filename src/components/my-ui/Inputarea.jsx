"use client"

import { Input } from "@/components/ui/input";

export default function Inputarea( { setUrl, setQuery} ) {

  function submitData(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const url = formData.get("url");
    const query = formData.get("query");

    setUrl(url);
    setQuery(query);
  }


  return (
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
  )
}
