import React from 'react'
import AuthorSleeve from './AuthorSleeve'
import { FaEye } from 'react-icons/fa';
import InfoBar from './InfoBar';
import Link from 'next/link';

 

const PostSummary = ({post}) => {
  const assetUrl = "https://api.vikaxnet.com/gallery/";
  
  return (
    <div className="p-6 w-9/12 my-8 mx-auto bg-white rounded-xl shadow-md  space-x-12"> 
      <AuthorSleeve 
      name={post.user.firstname+ ' ' + post.user.lastname}
      photo={post.user.photo}/>
      
      
      <div class=" flex items-center">
      
      <Link href={`/post/${post.id}`} passHref>
            

    <div class="post flex justify-space">
      <div class="post-thumbnail">
        <img src={assetUrl+post.photo} />
      </div>
      <div class="p-6">
      <h1 className="text-4xl">  {post.title}</h1>
      <p> {post.description} </p>
    </div>
    </div>
    
    </Link>

</div>
 <InfoBar 
 date={post.created_at}
 likes={post.likes}
 views={post.views}
 />

</div>
  )
}

export default PostSummary