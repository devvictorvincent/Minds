import React from 'react'
import PropTypes from 'prop-types'
import { techPosts } from '@/data/posts'
import PostSummary from '@/components/PostSummary'
import { followingPosts } from '@/data/followingData'


const Following = props => {
    

  return (
    <div>
        
      <div>
      {followingPosts.map((post, index) => (
         <div key="index">
             <PostSummary post={post} />
             </div>
        
      ))}
    </div>
    </div>
  )
}

Following.propTypes = {}

export default Following