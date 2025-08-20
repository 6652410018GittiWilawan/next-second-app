import type { Metadata } from "next";
// import { Mitr } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local"

// const mitr = Mitr({
//   subsets: ["latin"],
//   weight:["400"],
// });
const JaoMilkTeaExtraBold = localFont({
  src:"./fonts/JaoMilk Tea Extra Bold.ttf"
})

export const metadata: Metadata = {
  title: "DTI-SAU Lnwza",
  description: "เว็บขายกาแฟออนไลน์ ส่งทุกที่ ทุกเวลา 24 ชั่วโมง",
  keywords: ["DTI","SAU","Coffee","กาแฟ","24ฃั่วโมง"],
  icons:{
    icon:[
      {
      url:"next.svg",
      type: "image/svg+xml"
      }
    ],
  },
  authors:[
    {
      name: "Kitti",
      url: "https://github.com/6652410018GittiWilawan"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={JaoMilkTeaExtraBold.className}
      >
        {children}
      </body>
    </html>
  );
}
