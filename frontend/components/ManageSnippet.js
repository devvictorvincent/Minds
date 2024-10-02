import Cookies from 'js-cookie';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'

const 
ManageSnippet = ({postId}) => {
    const router = useRouter();
    const token =Cookies.get('token');
    const api_url = process.env.NEXT_PUBLIC_API_URL;

    const url = `${api_url}/me/post/delete/${postId}`;
    const rheaders = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/vnd.api+json',
        'Accept': 'application/vnd.api+json'
      };
    const deletePost = async (id) => {
        try {
            // Make API request using fetch or Axios
            const response = await fetch(url, {
              method:  'GET',
              headers: rheaders,
               
            });
    
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
    
            // Parse JSON response and update user data state
            const data = await response.json();
            //setOutput(data.data.data);
           
            console.log(data);
            router.push('/me/mypublications');
    
          } catch (error) {
            // Handle fetch or JSON parsing errors here
            console.error('Error:', error);
           
            console.log(error)
          }

    }
  return (
    <div 
    style={{
        display:'flex',
        flexDirection:'column',
        justifyContent:'left',
        alignContent:'start',
        alignItems:'start'
    }}>
        <div>
           <Link href={`/me/post/${postId}`}> Edit </Link>
        </div>
        <button onClick={deletePost}>
            Delete
        </button>
        
        
    </div>
  )
}

export default  ManageSnippet;