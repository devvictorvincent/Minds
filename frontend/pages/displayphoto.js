import { categories } from '@/data/categories';
import { useRouter } from 'next/router';
import React, { useState } from 'react';  
import { grabCookie } from '@/utils/grabCookie'; 
import Cookies from 'js-cookie';

const DisplayPhoto = () => {
   

    const token = Cookies.get('token');
    console.log(token);
  
  const url ="https://api.vikaxnet.com/api/me/set-profile";
 

  const [loading, setLoading] = useState(false);
const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState('');
  const router = useRouter();
 
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);

    // Create image preview
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  
  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    // Get interests from local storage (or global state if needed)
    const interests = JSON.parse(localStorage.getItem('interests'));
    const rheaders ={
        'Authorization' : `Bearer ${token}`, 
        'Accept': 'application/vnd.api+json'
      };
    // Form data to submit (interests and profile picture)
    const formData = new FormData();
    formData.append('photo', selectedFile);
    formData.append('interests', JSON.stringify(interests));

    // Send to API (mock example)
    const response = await fetch(url, {
      method: 'POST',
      headers: rheaders, 
      body: formData
    });

    if (response.ok) {
      console.log('Profile picture and interests uploaded successfully!');
      // Redirect or show success message
      router.push('/me');
    } else {
        setError('Upload Failed');
      console.error('Failed to upload');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Upload Profie Photo</h2>
        <p className='text-center'>Choose a display photo to continue </p>
        {error && <p className='alert alert-error'>{error}</p>}
        <div className='p-8'>
         
        <input
          type="file"
          accept="image/*"
          name='photo'
          onChange={handleFileChange}
          style={{ marginBottom: "20px" }}
        />

        {preview && (
          <div>
            <img
              src={preview}
              alt="Profile Preview"
              style={{ width: "150px", height: "150px", borderRadius: "50%", marginBottom: "20px" }}
            />
          </div>
        )}
             
        </div>
       
        
         
          <button 
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          onClick={handleSubmit}
          disabled={!selectedFile}
          style={{
            
            backgroundColor: selectedFile ? "blue" : "#6c757d",
           
            cursor: selectedFile ? "pointer" : "not-allowed"
          }}
        >
         {loading && <span className="spinner"></span>}
         {loading ? "Loading..." : " Lets Go!"}
        </button>
      </div>
    </div>
  );
};

export default DisplayPhoto;
