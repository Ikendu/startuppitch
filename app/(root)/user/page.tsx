import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
      <Link href='users/1'>Users</Link>
      <Home />
    </div>
  )
}

async function Home() {
  const resp = await fetch('https://jsonplaceholder.typicode.com/albums')
  if (!resp.ok) {
    throw new Error('Failed to fetch data')
  }
  const data = await resp.json()

  return (
    <div>
      <h1 className='text-2xl'>Home Page</h1>
      <p className='text-2xl'>This is the home page</p>
      <p className='text-2xl'>You can see the albums below</p>
      <ul>
        {data.map((album: { id: number; title: string }) => (
          <li key={album.id}>{album.title}</li>
        ))}
      </ul>
    </div>
  )
}
