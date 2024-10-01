import { categories } from '@/data/categories';
import { Router, useRouter } from 'next/router';
import React, { useState } from 'react';

const SelectInterests = () => {
  const router = useRouter(); 
  
  
const [interests, setIntrests] = useState([]);


const toggleInterest = (interestName) =>{
    if(interests.includes(interestName)){
        setIntrests(interests.filter(name => name !== interestName));
    }
    else {
        setIntrests([...interests, interestName])
    }
    console.log(interests);
}

const handleContinue = () => {
  if (interests.length >= 2) {
    // Saving selected interests in local storage or global state
    localStorage.setItem('interests', JSON.stringify(interests));

    // Redirect to profile picture page
    router.push('/displayphoto');
  }
};
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Choose Interests</h2>
        <p className='text-center'>Choose atleats two topics of interest. </p>
        <div className='p-8'>
         
           { categories.map((category, index) => (
                <div className='bg-blue-200 p-2 m-2 rounded-lg inline-block pointer'
                style={{ backgroundColor: interests.includes(category.name) ? "#007bff" : ''}} 
                key={category.name}
                onClick={() => toggleInterest(category.name)}>
                    {category.name}
                </div>
            ))}
             
        </div>
       
        
          <button
            type="button"
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            onClick={handleContinue}
          >
            Get Me Started
          </button>
       
      </div>
    </div>
  );
};

export default SelectInterests;
