import React from 'react'
import PropTypes from 'prop-types'
import { allPosts, techPosts } from '@/data/posts'
import PostSummary from '@/components/PostSummary'


const AllPosts = props => {
  

  return (
    <div>
        
      <div>
      {allPosts.map((post, index) => (
         <div key="index">
             <PostSummary post={post} />
             </div>
        
      ))}
    </div>
    </div>
  )
}

AllPosts.propTypes = {}

export default AllPosts