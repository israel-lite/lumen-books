import { NextResponse } from "next/server"

import nodemailer from "nodemailer"

export async function POST(req:Request){

 try{

 const {name,title,email,message}

 = await req.json()

 const transporter=

 nodemailer.createTransport({

   service:"gmail",

   auth:{

    user:process.env.GMAIL_USER,

    pass:process.env.GMAIL_APP_PASSWORD

   }

 })

 await transporter.sendMail({

   from:process.env.GMAIL_USER,

   to:process.env.MY_EMAIL,

   replyTo:email,

   subject:title,

   html:`

   <h2>New Message</h2>

   <p><b>Name:</b> ${name}</p>

   <p><b>Email:</b> ${email}</p>

   <p><b>Message:</b> ${message}</p>

   `

 })

 return NextResponse.json({

  success:true

 })

 }

 catch(error){

  console.log(error)

  return NextResponse.json({

   success:false

  },{

   status:500

  })

 }

}