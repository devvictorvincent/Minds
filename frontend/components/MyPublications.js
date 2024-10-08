import PropTypes from 'prop-types'
import { forYouPosts, techPosts } from '@/data/foryoudata'
import PostSummary from '@/components/PostSummary'
import { useEffect, useState } from 'react'
import Loading from './Loading'
import Cookies from 'js-cookie'
import PostSummarySmall from './PostSummarySmall'


const MyPublications = ({category = 'All'}) => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const token = Cookies.get('token');

    const rheaders ={
        'Authorization' : `Bearer ${token}`, 
        'Accept': 'application/vnd.api+json'
      };
    const url ="https://api.vikaxnet.com/api/me/posts";

    useEffect(()=>{
        const getPost = async() => {
            try {
                const result = await fetch(url, {
                    method: 'GET',
                    headers:rheaders
                   
                   
                });
                if(result.ok){
                    //const token = res.data.token;
                    const data = await result.json();
                    console.log(data);
                    setPosts(data.data.post) 
                     
                 
                   
                  }
                
                
            } catch (error) {
                setError(error.message);
                console.log(error.message);

                
            }
            finally {
                setLoading(false)

            }


        };
        getPost();
    }, [category])

 

  return (
    <div className="p-6 w-9/12 my-8 mx-auto bg-white rounded-xl shadow-md  space-x-12">
    <h1 class="text-2xl font-bold text-gray-800 mb-4">My Publications</h1>
    <div className="grid grid-cols-2 gap-2">
       
      {loading ? <Loading />:  <div>
      {posts.map((post, index) => (
         <div key={index}>
             <PostSummarySmall post={post} />
             
             </div>
        
      ))}
    </div>}
     
    </div>
    </div>
  )
}
 

export default MyPublications;