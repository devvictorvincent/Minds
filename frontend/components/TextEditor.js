// components/TextEditor.js
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const TextEditor = () => {
  const [editorHtml, setEditorHtml] = useState('');

  const handleChange = (html) => {
    setEditorHtml(html);
  };

  return (
    <div className="  mx-auto">  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
    <input
      type="text"
     
      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
      placeholder="Enter your title"
      required
    />
  </div>
  
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">Select Category</label>
    <select
      
     
      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
     
       
    >
<option value="">General</option>
<option value="">Technology</option>
<option value="">Finance</option>
<option value="">Media</option>
<option value="">Bigtech</option>
<option value="">Cybersecurity</option>

        </select>
  </div>
      <h2 className="text-2xl font-bold mb-4">Your Content</h2>
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
      <input type="file"   className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
     />
          
      </div>
       
         <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
        >
         Publish Changes
        </button>
      
    </div>
  );
};

export default TextEditor;
