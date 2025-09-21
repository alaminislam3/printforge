import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function navbar() {
  return (
    <div className='flex justify-between border-b-transparent px-3 items-center'>
        <div>
        <Link href={"/"}>
        <Image src="/logo.png" alt='logo img' height={50} width={200}></Image>
        </Link>
        </div>
        <div className='flex gap-3'>
         <p>3D Model</p>
         <Link href={"/about"} className='border-b text-[#F77429] mr-1'>About</Link>
        </div>


    </div>
  )
}
