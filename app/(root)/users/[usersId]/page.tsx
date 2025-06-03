import React from 'react'

// export async function generateMetadata({ params }: { params: { usersId: string } }) {
//   return {
//     title: `User ID: ${params.usersId}`,
//     description: `This is the user page for user with ID: ${params.usersId}`,
//   }
// }

// export async function generateMetadata({ params }: { params: { userId: string } }) {
//   const userId = params.userId
//   const resource = await getResourceById({ userId })
//   const title = resource.title || `Web Page for User ID: ${userId}`
//   const description = resource.description || `This is the user page for user with ID: ${userId}`
//   return {
//     title,
//     description,
//     others: {
//       'og:title': title,
//       'og:description': description,
//       'og:type': 'website',
//       'og:url': `https://example.com/users/${userId}`,
//       'og:image': `https://example.com/images/users/${userId}.jpg`,
//       'twitter:card': 'summary_large_image',
//       'twitter:title': title,
//       'twitter:description': description,
//       'twitter:image': `https://example.com/images/users/${userId}.jpg`,
//     },
//   }
// }

export default function page({ params }: { params: { usersId: string } }) {
  return <div>User ID: {params.usersId}</div>
}
