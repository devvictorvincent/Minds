import CommentSection from '@/components/CommentSection'
import Footer from '@/components/Footer'
import FullPostCard from '@/components/FullPostCard'
import Header from '@/components/Header'
import InfoBar from '@/components/InfoBar'
import LeftNavigation from '@/components/LeftNavigation'
import Loading from '@/components/Loading'
import PostSummary from '@/components/PostSummary'
import { getData } from '@/utils/getData'
import { useParams, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const Index = () => {
  const router = useRouter();
  const [post, setPost] =useState();
  const [error, setError] =useState();
  
   
 
  const { postId } = router.query;
  const id = parseInt(postId, 10);
  const url = `https://api.vikaxnet.com/api/post/${postId}`;

 
  console.log(url);

  useEffect(() =>{
    if (!postId) return; 
    const getPost = async() => {
      try {
          const result = await getData(url);
          setPost(result.data.post);
          console.log('Results:');
          console.log(result);
          
      } catch (error) {
          setError(error.message);
          console.log(error.message);

          
      }
      finally {
          

      }


  };
  getPost();

  }, [url]);


  return (
    <>
    <Header/> 
    {post ? <FullPostCard post={post} /> : <Loading /> }
     
  
    
    <Footer />
    </>
  )
}

export default Index