import { NextRequest, NextResponse } from "next/server";

export async function POST( req ) {
  console.log("Starting fetch..");

  try {
    const data = await req.json(); 
    const url = data.url;
    const question = data.query;
    const session_id = data.session_id;

    const response = await fetch("https://grounded-api.onrender.com/webpage", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({url, question, session_id})
    })

    const chatreply = await response.json();

    return NextResponse.json(chatreply);
  } catch (error) {
    console.log(error);

    return NextResponse.json(error);
  }

}
