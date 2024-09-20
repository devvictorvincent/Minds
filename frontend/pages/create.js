import CreateForm from '@/components/CreateForm'
import React from 'react'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

const Create = () => {
  return (
    <div>
        <Header/> 
    <div className="p-6 w-9/12 my-8 mx-auto bg-white rounded-xl shadow-md  space-x-12">
    <div class="justify-center py-5 px-20 mx-50"> 
    
    <CreateForm />
 
      
      
    </div>

 
</div>
  
    
    <Footer />
 
    </div>
  )
}

export default Create