import Footer from '@/components/Footer'
import Header from '@/components/Header'
import LeftNavigation from '@/components/LeftNavigation'
import PostSummary from '@/components/PostSummary'
import React from 'react'

const index = () => {
  return (
    <>
    <Header/> 
     
    <div class="flex justify-center py-5 mx-50">
      <div class="item bg-white p-3 rounded-xl">
        For You
      </div>
      <div class="item p-3 rounded-xl">
        Following
      </div>
    </div>
<div className="content-box bg-gray-200">
<PostSummary />
   <PostSummary />
   <PostSummary />
</div>
   
    
    <Footer />
    </>
  )
}

export default index