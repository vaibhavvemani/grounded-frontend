import { NextResponse } from "next/server"

export async function POST( req ) {

  try {
    const formData = await req.json();

    const response = await fetch("https://grounded-api.onrender.com/pdf", {
      method: "POST",
      "Content-type": "application/json",
      body: formData 
    });

    chatreply = await response.json();

    return NextResponse.json({message: chatreply});

  }
  catch (error) {
    console.log(error);
    return NextResponse.json({error: error});
  }

}
