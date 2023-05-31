'use client'
import React, { useState } from 'react'

export default function FormPost() {
  const [title, setTitle] = useState("")
  // Create a submit FormPost
  async function submitPost(e: React.FormEvent) {
    e.preventDefault()
    const data = await fetch(`/api/createPost/`, {
      method: 'POST',
      body: JSON.stringify({ title: title }),
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json'
      })
    })
    const res = await data.json()
    if (!res.ok) console.log(1, res)
    else console.log(2, res.body)
  }

  return (
    <>
      <form onSubmit={submitPost} className='w-screen h-screen'>
        <input onChange={(e) => setTitle(e.target.value)}
          value={title}
          type='text'
          placeholder="Type here"
          className="input input-bordered w-1/2 ml-10"
        />
        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>
    </>
  )
}