import React from 'react'
import PropTypes from 'prop-types'
import { allPosts, techPosts } from '@/data/posts'
import PostSummary from '@/components/PostSummary'
import usePost from '@/data/usePost'


const AllPosts = props => {
  const { data: posts, loading, error } =usePost();
  

  return (
    <div>
        {loading ? <div> Loading.... </div>:  <div>
      {posts.map((post, index) => (
         <div key="index">
             <PostSummary post={post} />
             </div>
        
      ))}
    </div>}
     
    </div>
  )
}

AllPosts.propTypes = {}

export default AllPosts