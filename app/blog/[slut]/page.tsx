import React from 'react'

export default async function blogdetailspage({params}) {
    const {id} =await params
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post =await res.json()
    // console.log(post);
    return  <div>{post.name}</div>
  
}
