import { NextResponse } from "next/server"

export async function POST( req ) {

  try {
    const formData = await req.formData();

    const response = await fetch("http://127.0.0.1:5000/pdf", {
      method: "POST",
      body: formData,
    });

    const chatreply = await response.text();
    console.log(chatreply);
    return NextResponse.json({message: chatreply});

  }
  catch (error) {
    console.log(error);
    return NextResponse.json({error: error});
  }

}
