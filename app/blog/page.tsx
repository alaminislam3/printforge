import React from 'react'
import { getAllModel } from '../lib/models'
import {model } from '../types/index'
import Link from 'next/link'
export default async function blogpage() {
    const results =await getAllModel()
    return (
    results.map((result: model)=> 
    <p key={result.id}> <Link href={`/blog/${result.id}`}> 
    
      {result.name}  
    </Link>
      </p>

    )
  )
}
