import PropTypes from 'prop-types'
import { forYouPosts, techPosts } from '@/data/foryoudata'
import PostSummary from '@/components/PostSummary'
import { useEffect, useState } from 'react'


const PostFilter = ({category = 'All'}) => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const url ="https://api.vikaxnet.com/api/filter-posts";

    useEffect(()=>{
        const getPost = async() => {
            try {
                const result = await fetch(url, {
                    method: 'POST',
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
    <div>
         
      <div>
      {loading ? <div className='loader'> Loading.... </div>:  <div>
      {posts.map((post, index) => (
         <div key={index}>
             <PostSummary post={post} />
             </div>
        
      ))}
    </div>}
    </div>
    </div>
  )
}
 

export default PostFilter;