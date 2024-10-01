import CommentSection from '@/components/CommentSection'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import InfoBar from '@/components/InfoBar'
import LeftNavigation from '@/components/LeftNavigation'
import Loading from '@/components/Loading'
import MyPublications from '@/components/MyPublications'
import PostSummary from '@/components/PostSummary'
import { allPosts } from '@/data/posts'
import useAccount from '@/data/useAccount'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { HiOutlineShare } from 'react-icons/hi';
import { HiOutlineClipboardCopy } from 'react-icons/hi';

const index = () => {
  const { data: user, loading, error } = useAccount();
  
  return (
    <>
    
       <Head>
        <title>User profile  </title>
        <meta name="description" content="Minds is a place where people shre and interract ith other individuals accross the globe. Own your story and share it!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Header/> 
    {user ?  <div className="p-6 w-9/12 my-8 mx-auto bg-white rounded-xl shadow-md  space-x-12">
    <div class="justify-center py-5 px-20 mx-50"> 
    <div class="float-right pointer">
    <HiOutlineClipboardCopy className="text-2xl" />
    </div>
    <img className="rounded-xl profile-image" src="/kemal.jpg" />
      <h1 class="text-3xl font-bold text-gray-800 mb-4">{user.firstname}{user.lastname}
        <p class="text-gray-700 text-sm float-right">@{user.username}
   
      </p></h1>
     <div class="flex gap-5 items-center">  
     <button class="flex gap-2 my-5"><HiOutlineShare className="text-2xl" />Share</button>
     <Link href="/me/edit-profile"> <button className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-md   hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Edit Profile</button> </Link>
     </div> 
      
      <div>{user.bio}</div>
      <div class="flex gap-5 items-center space-x-4 text-gray-700 text-sm bg-gray-100 p-2 rounded-md">
        <p>Followers: {user.followers}</p>
        <p>Following: {user.following}</p>
      </div>
      
 
      
      
    </div>

 
</div>: <Loading />}
    
  
   

 <MyPublications />
  
    
    <Footer />
    </>
  )
}

export default index