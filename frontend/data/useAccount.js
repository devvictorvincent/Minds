import { getData } from "@/utils/getData";
import Cookies from "js-cookie";

const { useState, useEffect } = require("react");

const useAccount =() => {
    const token = Cookies.get('token');
    console.log(token);
    
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const url = "https://api.vikaxnet.com/api/me";
    const rheaders ={
        'Authorization' : `Bearer ${token}`, 
        'Accept': 'application/vnd.api+json'
      };

    useEffect(() =>{

        const getPost = async() => {

           
        const response = await fetch(url, {
            method: 'GET',
            headers: rheaders,
          });
      
          if (response.ok) {
            console.log('Profile Loaded  successfully!');
            const data = await response.json(); 
              setData(data.data.user)
          } else {
              setError('Upload Failed');
            console.error('Failed to upload');
          };

        };
        getPost();

    }, url)

    return {data, error, loading};

}

export default useAccount;