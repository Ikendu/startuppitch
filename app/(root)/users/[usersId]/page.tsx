import React from 'react'

export default function page({ params }: { params: { usersId: string } }) {
  return <div>User ID: {params.usersId}</div>
}
