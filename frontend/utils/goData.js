import Cookies from "js-cookie";

 

const goData = async ({ endpoint, body = null }) => {
  
    const token = Cookies.get('token');
    const api_url = process.env.NEXT_PUBLIC_API_URL;
    console.log('URL:')
   
    const url = `${api_url}${endpoint}`;
    console.log(endpoint);
  
    const rheaders = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/vnd.api+json',
      'Accept': 'application/vnd.api+json'
    };
  
   
        try {
          // Make API request using fetch or Axios
          const response = await fetch(url, {
            method: body ? 'POST' : 'GET',
            headers: rheaders,
            body: body ? JSON.stringify(body) : null
          });
  
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
  
          // Parse JSON response and update user data state
          const data = await response.json();
          //setOutput(data.data.data);
         
          return data;
  
        } catch (error) {
          // Handle fetch or JSON parsing errors here
          console.error('Error:', error);
         
          return 404;
        }
      
  
    
  
   
  };
  
  export default goData;
  