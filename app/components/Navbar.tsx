import { auth, signIn, signOut } from '@/auth'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function Navbar() {
  const session = await auth()
  return (
    <header className='bg-white shadow-md px-5 py-3'>
      <nav className='flex justify-between items-center'>
        <Link href='/'>
          <Image src='/logo.png' alt='Logo' width={50} height={50} />
        </Link>

        <div className='flex items-center gap-5'>
          {session && session?.user ? (
            <>
              <Link href='/startup/create'>
                <span>Create</span>
              </Link>
              <button onClick={() => signOut}>
                <span>Logout</span>
              </button>
              <Link href={`/user/${session?.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                'use server'
                await signIn('github')
              }}
            >
              <button type='submit'>Login</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  )
}
