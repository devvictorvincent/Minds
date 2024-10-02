import React from 'react'
import AuthorSleeve from './AuthorSleeve'
import { FaEye } from 'react-icons/fa';
import InfoBar from './InfoBar';
import Link from 'next/link';

 

const PostSummarySmall= ({post}) => {
  const assetUrl = "https://api.vikaxnet.com/gallery/";
  
  return (
    <div className="p-2 w-9/12 mx-auto bg-white rounded-xl shadow-md  space-x-12"
    style={{
        padding:20
    }}> 
      <AuthorSleeve 
      name={post.user.firstname+ ' ' + post.user.lastname}
      photo={post.user.photo}/>
      
      
      <div class="items-center">
      
      <Link href={`/post/${post.id}`} passHref>
            

    <div class="posty justify-space">
      <div class="post-thumbndail" style={{margin:0}}>
        <img src={assetUrl+post.photo} />
      </div>
      <div class="p-6">
      <h1 className="">  {post.title}</h1>
      <p
      style={{
        fontSize:12,
        color:'grey'
      }}> {post.introduction} </p>
    </div>
    </div>
    
    </Link>

</div>
 <InfoBar type={1}
 date={post.dated}
 likes={post.likes}
 views={post.views}
 />

</div>
  )
}

export default PostSummarySmall