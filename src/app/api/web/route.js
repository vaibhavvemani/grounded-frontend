import { NextRequest, NextResponse } from "next/server";

export async function POST( req ) {

  try {
    const data = await req.json(); 
    const url = data.url;
    const question = data.query;

    const response = await fetch("https://grounded-api.onrender.com/webpage", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({url, question})
    })

    const chatreply = await response.text();

    return NextResponse.json({message: chatreply});
  } catch (error) {
    console.log(error);

    return NextResponse.json(error);
  }

}
