import React from 'react'
import AuthorSleeve from './AuthorSleeve'
import { FaEye } from 'react-icons/fa';
import InfoBar from './InfoBar';
import Link from 'next/link';

 

const FullPostCard = ({post}) => {
    const assetUrl = "https://api.vikaxnet.com/gallery/";
  
  return (

    <div className="p-6 w-9/12 my-8 mx-auto bg-white rounded-xl shadow-md  space-x-12">
    <div class="justify-center py-5 px-20 mx-50"> 
    
    <img src={assetUrl+post.photo} 
    style={{height:400}}/>
      <h1 class="text-3xl font-bold text-gray-800 mb-4">{post.title}</h1>
      <InfoBar 
 date={post.created_at}
 likes={post.likes}
 views={post.views}
 />

 
      
      <div className="text-gray-800"> 
       
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </div>

 
</div>
  )
}

export default FullPostCard