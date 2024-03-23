// import nodemailer from "nodemailer";

// export async function GET(req, res) {
//   console.log(5, "req.body");
//   // const transporter = nodemailer.createTransport({
//   //   service: "gmail",
//   //   auth: {
//   //     user: "rajrajbhar682@gmail.com",
//   //     pass: "ghxdsnd",
//   //   },
//   //   secure: false,
//   // });

//   const {
//     name,
//     email,
//     mobileNo,
//     address,
//     city,
//     pincode,
//     flat,
//     message,
//     orderItem,
//   } = req.body;
//   console.log(29, "api hit", req.body);
//   const mailData = {
//     from: "rajrajbhar682@gmail.com",
//     to: email,
//     subject: "Your Subject Here",
//     text: "Your Message Here",
//   };

//   // try {
//   //   await transporter.sendMail(mailData);
//   //   res.status(200).json({ message: "Message Sent" });
//   // } catch (error) {
//   //   console.error("Error sending email:", error);
//   //   res.status(500).json({ error: error.message || "Something went wrong" });
//   // }
// }

// export async function POST(req, res) {
//   console.log("api hit");
//   const {
//     name,
//     email,
//     mobileNo,
//     address,
//     city,
//     pincode,
//     flat,
//     message,
//     orderItem,
//   } = req.body;
//   console.log(55, req.body);
//   return NextResponse.json({ message: "Hello - POST", data: req.body });
// }
// import nodemailer from "nodemailer";

// export async function POST(requset) {
//   console.log("api hit", requset.json());

//   const {
//     name,
//     email,
//     mobileNo,
//     address,
//     city,
//     pincode,
//     flat,
//     message,
//     orderItem,
//   } = requset.json();

//   let transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: "nr470245@gmail.com", // your email
//       pass: "wbeq dmbs tifb sxst", // your password
//     },
//   });

//   let info = await transporter.sendMail({
//     from: "Neha Rajbhar", // sender address
//     to: "nr470245@gmail.com", // list of receivers
//     subject: "Cloth donator detail is saved", // Subject line
//     text: `Hello ${name},\n\nYour message: ${message}`, // plain text body
//     // html: "<b>Hello world?</b>", // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   let data = requset.json();

//   return NextResponse.json({ message: "Data Saved Sucess" });
// }

import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      name,
      email,
      mobileNo,
      address,
      city,
      pincode,
      flat,
      message,
      orderItem,
    } = request.body; // Accessing body directly
    console.log(115, request.body);
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "nr470245@gmail.com", // your email
        pass: "wbeq dmbs tifb sxst", // your password
      },
    });

    let info = await transporter.sendMail({
      from: "Neha Rajbhar", // sender address
      to: "nr470245@gmail.com", // list of receivers
      subject: "Cloth donator detail is saved", // Subject line
      text: `Hello ${name},\n\nYour message: ${message}`, // plain text body
      // html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    return NextResponse.json({ message: "Data Saved Success" });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
