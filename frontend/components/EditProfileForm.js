// EditProfileForm.js
import useAccount from '@/data/useAccount';
import React, { useState } from 'react';
import Loading from './Loading';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

const EditProfileForm = () => {
  const baseUrl = process.env.NEXT_PUBLIC_ASSET_URL;
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const token  =Cookies.get('token');

  const sendUrl = `${apiUrl}/me/profile`;
  const [stateData, setStateData] = useState();
  
const [selectedFile, setSelectedFile] = useState(null);
const [sending, setSending] = useState(false);
const [sendError, setSendError] = useState(false);
const [success, setSuccess] = useState(false);
const [preview, setPreview] = useState(null);
const router = useRouter();
  const { data: user, loading, error } = useAccount();
  const [avatar, setAvatar] = useState(null);

  React.useEffect(() => {
    if (user) {
      setStateData(user); 
       
    }
  }, [user]);  


  
  
const handleForm =(event) =>{
  const {name, value} = event.target;
  setStateData(prevState => ({
      ...prevState, 
      [name]:value
  }));
   
}
const handleFileChange = (e) => {
  const file = e.target.files[0];
  setSelectedFile(file);
  console.log('selectedFile:');
  console.log(selectedFile);

  // Create image preview
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result);
    reader.readAsDataURL(file);
  }
};


const handleSubmit = async (e) => {
  e.preventDefault();
  setSending(true);
  setSendError('');
  // Get interests from local storage (or global state if needed)
  
  const rheaders ={
      'Authorization' : `Bearer ${token}`, 
      'Accept': 'application/vnd.api+json'
    };
  // Form data to submit (interests and profile picture)
  const formData = new FormData();
  formData.append('photo', selectedFile);
  formData.append('firstname', stateData.firstname);
  formData.append('lastname', stateData.lastname);
  formData.append('email', stateData.email);
  formData.append('username', stateData.username);
  formData.append('bio', stateData.bio);
console.log("form data");
console.log(formData);
  // Send to API (mock example)
  const response = await fetch(sendUrl, {
    method: 'POST',
    headers: rheaders, 
    body: formData
  });

  if (response.ok) {
    const newdata =await response.json();
    console.log('success data:');
    console.log(newdata);
    setSuccess('Profile  uploaded successfully!')
     
    router.push('/me/profile');
    
  } else {
      setSendError('Upload Failed');
    console.error('Failed to upload');
  }
  setSending(false);
};

  return (
    <div className="mx-auto p-6 bg-white rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
      {sendError && <p className='alert alert-error'>{sendError}</p>}
      {success && <p className='alert alert-success'>{success}</p>}
      {stateData ? 
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
          <input
            type="text" name='firstname'
             value={stateData.firstname}            
            onChange={handleForm}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Enter your name"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
          <input
            type="text"
            value={stateData.lastname}
            name='lastname'
            onChange={handleForm}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            value={stateData.email}
            name='email'
            onChange={handleForm}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="text"
            value={stateData.username}
            name='username'
            onChange={handleForm}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Enter your Username"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
          <textarea
            value={stateData.bio}
            name='bio'
            onChange={handleForm}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Tell us about yourself"
            rows="4"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Avatar</label>
          <input
            type="file"
            accept="image/*"
            name='photo'
            onChange={handleFileChange}
            className="w-full border border-gray-300 rounded-md p-2 
            focus:outline-none focus:ring-2 focus:ring-blue-600"
            
          />
    {preview ? (
          <div>
            <img
              src={preview}
              alt="Profile Preview"
              style={{ width: "150px", height: "150px", borderRadius: "50%", marginBottom: "20px" }}
            />
          </div>
        ):<div> {user.photo && (
          <div>
            <img
              src={baseUrl+user.photo}
              alt="Profile Preview"
              style={{ width: "150px", height: "150px", borderRadius: "50%", marginBottom: "20px" }}
            />
          </div>
        )} </div>}

        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
        >
           {sending && <span className="spinner"></span>}
           {sending ? "Updating..." : " Lets Go!"}
           
        </button>
      </form> : <Loading />
      }
      
    </div>
  );
};

export default EditProfileForm;
