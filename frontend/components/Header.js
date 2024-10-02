import Link from 'next/link'
import React, { useContext } from 'react'
import RightMenu from './RightMenu'
import SearchBar from './SearchBar'
import UserThumb from './UserThumb'
import { AuthContext } from '@/AuthContext'

const Header = () => {
  const { isAuthenticated, user, authenticate, goGuest } = useContext(AuthContext);

  return (
    <div className="header flex flex-row items-center justify-between content-center">
        <div class="logo-box">
        <Link href="/">  <h2>Minds </h2> </Link>
            </div>
            <SearchBar />
            <div class="nav flex justify-between items-center content-center gap-5">
                <div class="item">
                  <Link href="/create"> Create + </Link>
                </div> 
                {isAuthenticated ? <div class="item">
                    <UserThumb />
                </div> : <Link href={'/login'}>Sign In </Link>}
                 
                <div class="item">
                   <RightMenu />
                </div>
            </div>
            
            </div>
  )
}

export default Header