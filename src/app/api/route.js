import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const data = await req.json();

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
      subject: "Confirmation of Donation Selection",
      text: `Hello ${
        data?.userDetails?.name
      },\n\nThank you for choosing to donate through Old Cloth Foundation. Your generosity will make a significant difference in the lives of those in need.
      \nThis email serves as confirmation of the items you have selected for donation. Below is a summary of your donation Items Selected: \nCart Item: ${data?.cartItems
        ?.filter((item) => item.qty > 0)
        ?.map((item) => `${item?.qty} ${item?.name}`)
        .join(", ")}
      \nPlease review the details above and ensure everything is accurate. If you have any questions or need to make any changes, please reply to this email or contact us at agarwalritesh11@gmail.com.
      \nThank you again for your generosity and support.\n\nBest regards,\nOld Cloth Foundation`,
    });

    let selfInfo = await transporter.sendMail({
      from: "Neha Rajbhar",
      to: "nr470245@gmail.com",
      subject: "Donation Selection Notification",
      text: `Dear Team, \n\nWe have received a donation selection from ${
        data?.userDetails?.name
      }. Below are the details of the items selected: \nInfo :

      \nName: ${data?.userDetails?.name}
      \nEmail: ${data?.userDetails?.email}
      \nMobile number: ${data?.userDetails?.mobileNumber}
      \nFlat: ${data?.userDetails?.flat}
      \nAddress: ${data?.userDetails?.address}
      \nCity: ${data?.userDetails?.city}
      \nPincode: ${data?.userDetails?.pincode}
      \nDay Choosen: ${data?.time.day}
      \nTime Choosen:${data?.time?.timeSlot}
      \nLocation: ${data?.location}
      \nPickup Type Name: ${data?.pickupData?.name}
      \nPickup Type Cost: ${data?.pickupData?.cost}
      \nCart Item: ${data?.cartItems
        ?.filter((item) => item.qty > 0)
        ?.map((item) => `${item?.qty} ${item?.name}`)
        .join(", ")}
      \nMessage: ${
        data.note
      } \n Please ensure that the inventory is updated accordingly. If you require any further information, feel free to reach out.
      \nThank you. \n\nBest regards,\nTeam Old Cloth Foundation

      `,
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
