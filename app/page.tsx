import React from 'react'
import Image from "next/image";
import coffee2 from "./images/coffee2.jpg"
import coffee3 from "./images/coffee3.jpg"

export default function Home() {
  return (
    <div>
      <h1 className='text-center text-4xl font-bold text-amber-900'>
        Saibao-Coffee Cafe
      </h1>
      <h3 className='text-center text-4xl font-bold text-amber-900'>
        ยินดีต้อนรับ
        </h3>
      <hr className='my-5 mx-10'/>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aliquam in rerum nulla labore, sapiente placeat quasi natus neque similique. Consequatur aperiam nostrum exercitationem eveniet qui iusto doloremque quisquam maiores dolores eligendi numquam cupiditate dolorum dicta, tempora corrupti, obcaecati minus dolor corporis dolore modi eum esse facilis atque consequuntur. Sequi.
      </p>
       <hr className='my-5 mx-10'/>
      <Image
       src="/coffee1.jpg"
       alt="กาแฟนะจ๊ะ"
       width={200}
       height={200}
      />
        <Image
       src={coffee2}
       alt="กาแฟนะจ๊ะ"
       width={200}
       height={200}
      />
        <Image
       src={coffee3}
       alt="กาแฟนะจ๊ะ"
       width={200}
       height={200}
      />
       <Image
       src="https://cdn.pixabay.com/photo/2018/09/19/20/44/coffee-break-3689529_640.jpg"
       alt="กาแฟนะจ๊ะ"
       width={200}
       height={200}
       className='flex my-auto'
      />
    </div>
    
  )
}
