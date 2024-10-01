import PropTypes from 'prop-types'
import { forYouPosts, techPosts } from '@/data/foryoudata'
import PostSummary from '@/components/PostSummary'
import { useEffect, useState } from 'react'
import Loading from './Loading'


const MyPublications = ({category = 'All'}) => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const url ="https://api.vikaxnet.com/api/posts";

    useEffect(()=>{
        const getPost = async() => {
            try {
                const result = await fetch(url, {
                    method: 'GET',
                    headers:{
                        "Content-type": "applcation/json",
                    },
                    body: JSON.stringify({category})
                   
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
    <h1 class="text-3xl font-bold text-gray-800 mb-4">Publications</h1>
    <div className="grid grid-cols-2 gap-4">
      <div>
      {loading ? <Loading />:  <div>
      {posts.map((post, index) => (
         <div key={index}>
             <PostSummary post={post} />
             </div>
        
      ))}
    </div>}
    </div>
    </div>
    </div>
  )
}
 

export default MyPublications;