import React from 'react'
import UserThumb from './UserThumb'
 

const AuthorSleeve = ({name, photo = "/kermal.jpg"}) => {
  const assetUrl = "https://api.vikaxnet.com/gallery/";
  return (
    <div className="flex items-center gap-3 bg-gray-100 rounded-xl">
      <div className="userthumb">
        <img src={assetUrl+photo} />
      </div>
        

        <h3>{name}</h3>

    </div>
  )
}

 

export default AuthorSleeve