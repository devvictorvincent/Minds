import React from 'react'
import UserThumb from './UserThumb'
 

const AuthorSleeve = ({name, photo = null}) => {
  return (
    <div className="flex items-center gap-3 bg-gray-100 rounded-xl">
        <UserThumb />

        <h3>{name}</h3>

    </div>
  )
}

 

export default AuthorSleeve