import React from 'react'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h2 className='text-6xl'>Dashboard Header</h2>
      {children}
    </div>
  )
}
