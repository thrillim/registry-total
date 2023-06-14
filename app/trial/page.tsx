'use client'

import { Post } from '@prisma/client';
import Link from 'next/link';
import useSWR from 'swr'

// async function getPosts() {
//   const res = await fetch(`${process.env.BASE_URL}/api/getPosts/`, {
//     method: 'GET',
//     headers: new Headers({
//       'Content-Type': 'application/json',
//       Accept: 'application/json'
//     }),
//     // credentials: 'same-origin',
//     // cache: 'no-store',
//   })
//   return res.json()
// }

const fetcher = () => fetch('/api/getPosts').then((res) => res.json())

export default function Trial() {
  const { data: posts, isLoading } = useSWR<Post[]>('/api/getPosts', fetcher)

  return (
    <main className='py-8 px-48'>
      <Link className='btn' href='/trial'>Go to the trial dashboard</Link>
      {isLoading && <div>Loading...</div>}
      {posts && posts.map((post) => (
        <div className='text-lg pt-6' key={post.id}>{post.title}</div>
      ))}
    </main>
  )
}