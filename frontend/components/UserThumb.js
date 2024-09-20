import Link from 'next/link'
import React from 'react'

const UserThumb = () => {
  return (
    <div className="userthumb">
        <Link href="/me/profile">
        <img src="/kemal.jpg" />
         </Link>
    </div>
  )
}

export default UserThumb