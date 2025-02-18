import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div className='text-white bg-black flex justify-center items-center h-screen'>
                <Image
        src={"https://loremflickr.com/200/200?random=2" }
        height={500}
        width={500}
        alt="random image"
        />
      <p>This is test page , gg while testing turbopack</p>
    </div>
  )
}

export default page
