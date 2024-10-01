// RightMenu.js
import React, { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import LogoutButton from './LogoutButton';

const RightMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
     
      
      <button onClick={toggleMenu} className="p-2 bg-blue-600 text-white rounded-md">
      <HiMenu className="text-2xl" />
    </button>
 
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-800 text-white shadow-lg transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-6">
            <h2 class="float-right pointer" onClick={toggleMenu}>Close(X) </h2>
          <h2 className="text-2xl font-semibold mb-4">Menu</h2>
          <ul>
            <li className="py-2 border-b border-gray-600"><a href="/">Home</a></li>
            <li className="py-2 border-b border-gray-600"><a href="/me/profile">Profile</a></li> 
            <li className="py-2">
              <LogoutButton />
              </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RightMenu;
