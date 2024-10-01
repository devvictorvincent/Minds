import Footer from '@/components/Footer'
import Header from '@/components/Header'
import LeftNavigation from '@/components/LeftNavigation'
import PostSummary from '@/components/PostSummary'
import AllPosts from '@/sections/allPosts'
import allPosts from '@/sections/allPosts'
import Following from '@/sections/Following'
import ForYou from '@/sections/ForYou'
import Head from 'next/head'
import React, { useState } from 'react'

const index = () => {
  const [view, setView] = useState('All');
  const togView = (status) =>
  {
    setView(status);
    console.log(status);

  }
  return (
    <>
    
     <Head>
        <title>Home | Welcome to Minds. Share your life, share your story and experience</title>
        <meta name="description" content="Minds is a place where people shre and interract ith other individuals accross the globe. Own your story and share it!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Header/> 
     
    <div class="flex justify-center py-5 mx-50">
      <div className={`item pointer  p-3 rounded-xl ${view == 'All'? 'bg-white': '' }`} onClick={() => (togView('All'))}>
        All
      </div> 
      <div className={`item pointer  p-3 rounded-xl ${view == 'ForYou'? 'bg-white': '' }`} onClick={() => (togView('ForYou'))}>
        For You
      </div>
      <div className={`item pointer  p-3 rounded-xl ${view == 'Following'? 'bg-white': '' }`} onClick={() => (togView('Following'))}>
        Following
      </div>
    </div>
<div className="content-box bg-gray-200">
   {view === 'All' ? (
        <AllPosts />
      ) : view === 'ForYou' ? (
        <ForYou />
      ) : (
        <Following />
      )}
</div>
   
    
    <Footer />
    </>
  )
}

export default index