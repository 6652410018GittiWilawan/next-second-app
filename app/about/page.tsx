import React from 'react'
import { Mitr } from "next/font/google";
const mitr = Mitr({
  subsets: ["latin"],
  weight:["400"],
});

export default function page() {
  return (
    <div>
        <h1>About Page</h1>
        <h3 className={mitr.className}>เกี่ยวกับเรา</h3>
        <hr/>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptatibus architecto ipsa nobis maiores quaerat recusandae suscipit nemo ratione saepe ipsam alias omnis, animi reprehenderit tenetur nisi molestiae, qui at.
        </p>
    </div>
    
  )
}
