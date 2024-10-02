import Footer from '@/components/Footer'
import Header from '@/components/Header'
import LeftNavigation from '@/components/LeftNavigation'
import PostSummary from '@/components/PostSummary'
import { categories } from '@/data/categories'
import AllPosts from '@/sections/allPosts'
import allPosts from '@/sections/allPosts'
import Following from '@/sections/Following'
import ForYou from '@/sections/ForYou'
import PostFilter from '@/sections/PostFilter'
import Head from 'next/head'
import React, { useState } from 'react'

const Index = () => {
  const [view, setView] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  console.log(selectedCategory);
  const togView = (status) =>
  {
    setSelectedCategory(status);
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
     
      {categories.map((category, Index) => (
        <div key={Index} className={`item pointer  p-3 m-2 rounded-xl ${view == 'All'? 'bg-white': '' }`} 
        onClick={() => (togView(category.name))}
        style={{
         backgroundColor: category.name == selectedCategory ? 'blue' :'', color: category.name == selectedCategory ? 'white' :''
        }}>
        {category.name}
      </div> 
      ))}
      
   
       
    </div>
<div className="content-box bg-gray-200">
   <PostFilter category={selectedCategory} />
</div>
   
    
    <Footer />
    </>
  )
}

export default Index