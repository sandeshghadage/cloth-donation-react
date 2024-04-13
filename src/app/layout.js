import { Inter } from "next/font/google";
import "./globals.css";
import FlowByteFooter from "./ui/footer";
import FlowBiteNavBar from "./ui/navBar";
import { ThemeModeScript } from "flowbite-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Old Cloth Foundation: Donate your old cloths",
  description: "Old Cloth Foundation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <body className={inter.className}>
        <FlowBiteNavBar />
        {children}
        <FlowByteFooter />
      </body>
    </html>
  );
}
