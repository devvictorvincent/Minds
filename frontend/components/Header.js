import React from 'react'
import UserThumb from './UserThumb'

const Header = () => {
  return (
    <div className="header flex flex-row justify-between content-center">
        <div class="logo-box">
        <h2>Minds </h2>
            </div>
            
            <div class="nav flex justify-between content-center gap-5">
                <div class="item">
                    Create +
                </div> 
                <div class="item">
                    <UserThumb />
                </div>
            </div>
            
            </div>
  )
}

export default Header