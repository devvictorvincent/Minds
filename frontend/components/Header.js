import Link from 'next/link'
import React from 'react'
import SearchBar from './SearchBar'
import UserThumb from './UserThumb'

const Header = () => {
  return (
    <div className="header flex flex-row justify-between content-center">
        <div class="logo-box">
        <Link href="/">  <h2>Minds </h2> </Link>
            </div>
            <SearchBar />
            <div class="nav flex justify-between content-center gap-5">
                <div class="item">
                  <Link href="/create"> Create + </Link>
                </div> 
                <div class="item">
                    <UserThumb />
                </div>
            </div>
            
            </div>
  )
}

export default Header