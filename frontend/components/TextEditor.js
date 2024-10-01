// components/TextEditor.js
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import { categories } from '@/data/categories';
import Cookies from 'js-cookie';
import Router from 'next/router';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const TextEditor = () => {
  
  const token = Cookies.get('token');
  console.log(token);
  
  const url ="https://api.vikaxnet.com/api/me/new-post";

  const [selectedFile, setSelectedFile] = useState(null);
  
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);
  const [editorHtml, setEditorHtml] = useState('');
  const [post, setPost] =useState({
    title: '',
    category: '',
    introduction: '',
    photo: '' 
});
let validated = post.title.trim() !== '' && post.category !== '' && post.introduction.trim() !== ''&& post.photo.trim() !== '';

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
const handleForm =(event) =>{
    const {name, value} = event.target;
    setPost(prevState => ({
        ...prevState, 
        [name]:value
    }));
    console.log(post);
}

  const handleChange = (html) => {
    setEditorHtml(html);
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(''); 

    const rheaders ={
        'Authorization' : `Bearer ${token}`, 
        'Accept': 'application/vnd.api+json'
      };
    // Form data to submit (interests and profile picture)
    const formData = new FormData();
    formData.append('photo', selectedFile);
    formData.append('title', post.title);
    formData.append('introduction', post.title);
    formData.append('category', post.category);
    formData.append('content', editorHtml);

    // Send to API (mock example)
    const response = await fetch(url, {
      method: 'POST',
      headers: rheaders, 
      body: formData
    });

    if (response.ok) {
      console.log('Profile picture and interests uploaded successfully!');
      // Redirect or show success message
      Router.push('/me');
    } else {
        setError('Upload Failed');
      console.error('Failed to upload');
    }
    setLoading(false);
  };
  return (
    <div className="  mx-auto"> 
    
     <div className="mb-4">
        <h2 className="text-2xl font-bold mb-4">Create Content On Minds</h2>
        {error && <p className='alert alert-error'>{error}</p>}
    <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
    <input
      type="text"
      name='title'
      onChange={handleForm}
      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
      placeholder="Enter your title"
      required
    />
  </div>

  <div className="mb-4">
        
    <label className="block text-sm font-medium text-gray-700 mb-1">Introduction</label>
    <textarea
      type="text"
      name='introduction'
      onChange={handleForm}
     
      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
      placeholder="Enter publication summery"
      required
    />
  </div>
  
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">Select Category</label>
    <select
    name='category'
      onChange={handleForm}
     
      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
     
       
    >
      {categories.map((category, index) =>(
        <option value={category.name}>{category.name}</option>
      ))}
 
        </select>
  </div>
      <h2 className="mb-4">Your Content</h2>
      <ReactQuill
        value={editorHtml}
        onChange={handleChange}
        theme="snow"
        className="border rounded-lg"
        style={{height:500}}
      />
      <div>
          <br />
          <br />
          <br />
          <br />
      <label className="block text-sm font-medium text-gray-700 mb-1">Set Photo</label>
      <input type="file" 
      onChange={handleFileChange}
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
     />
            {preview && (
          <div>
            <img
              src={preview}
              alt="Profile Preview"
              style={{ width: "250px", height: "250px", marginBottom: "20px" }}
            />
          </div>
        )}

      </div>
       
         <button
          type="submit"
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
        >
         
         {loading && <span className="spinner"></span>}
         {loading ? "Loading..." : " Publish Changes"}
        </button>
      
    </div>
  );
};

export default TextEditor;
