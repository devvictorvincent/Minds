import useAccount from '@/data/useAccount';
import Link from 'next/link'
import React from 'react'

const UserThumb = () => {
  const { data: user, loading, error } = useAccount();
  const assetUrl = "https://api.vikaxnet.com/gallery/"
 
  return (
    <div className="userthumb">
      {user ?  <Link href="/me/profile">
        <img src={assetUrl+user.photo}/>
         </Link> :  <Link href="/me/profile">
        Sign In
         </Link> }
       
    </div>
  )
}

export default UserThumb