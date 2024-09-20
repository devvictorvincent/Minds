import CommentSection from '@/components/CommentSection'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import InfoBar from '@/components/InfoBar'
import LeftNavigation from '@/components/LeftNavigation'
import PostSummary from '@/components/PostSummary'
import React from 'react'

const index = () => {
   
  return (
    <>
    <Header/> 
    <div className="p-6 w-9/12 my-8 mx-auto bg-white rounded-xl shadow-md  space-x-12">
    <div class="justify-center py-5 px-20 mx-50"> 
    
    <img className="rounded-xl" src="https://th.bing.com/th/id/OIP.MN48ULWStzJPJgL4GdgdXQHaE8?rs=1&pid=ImgDetMain" />
      <h1 class="text-3xl font-bold text-gray-800 mb-4">Victor Vincent</h1>
      <div>Creative software engineer who loves sharing his findings and loves sharing his views openely</div>
      <div class="flex gap-5 items-center space-x-4 text-gray-700 text-sm bg-gray-100 p-2 rounded-md">
        <p>Followers: 606</p>
        <p>Following: 1.2k</p>
      </div>
      
 
      
      
    </div>

 
</div>
  
    
    <Footer />
    </>
  )
}

export default index