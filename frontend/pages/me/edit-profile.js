import EditProfileForm from '@/components/EditProfileForm'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import LeftNavigation from '@/components/LeftNavigation'
import PostSummary from '@/components/PostSummary'
import React from 'react'

const index = () => {
  return (
    <>
    <Header/> 
    <div className="p-6 w-9/12 my-8 mx-auto bg-white rounded-xl shadow-md  space-x-12">
    <div class="justify-center py-5 px-20 mx-50"> 
    
    <EditProfileForm />
 
      
      
    </div>

 
</div>
  
    
    <Footer />
 
    </>
  )
}

export default index