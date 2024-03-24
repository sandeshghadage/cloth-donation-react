import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const data = await req.json();
    console.log(106, data);

    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "nr470245@gmail.com",
        pass: "wbeq dmbs tifb sxst",
      },
    });

    let info = await transporter.sendMail({
      from: "Neha Rajbhar",
      to: data?.userDetails?.email,
      subject: "Cloth donator detail is saved",
      text: `Hello ${data?.userDetails?.name},\n\nYour message: ${data?.note}`,
    });

    let selfInfo = await transporter.sendMail({
      from: "Neha Rajbhar",
      to: "nr470245@gmail.com",
      subject: "New Donation Detail Form Submission",
      text: `New contact form submission:\n\nName: ${
        data?.userDetails?.name
      }\nEmail: ${data?.userDetails?.email}
      \nMobile number: ${data?.userDetails?.mobileNumber}
      \nFlat: ${data?.userDetails?.flat}
      \nAddress: ${data?.userDetails?.address}
      \nCity: ${data?.userDetails?.city}
      \nPincode: ${data?.userDetails?.pincode}
      \nDay Choosen: ${data?.time.day}
      \nTime Choosen:${data?.time?.timeSlot}
      \nLocation: ${data?.location}
      \nVehicle Type: ${data?.vehicalType}
      \nCart Item: ${data?.cartItems
        ?.filter((item) => item.qty > 0)
        ?.map((item) => `${item?.qty} ${item?.name}`)
        .join(", ")}
      \nMessage: ${data.note}`,
    });

    return NextResponse.json({ message: "Data Saved Success", data });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
