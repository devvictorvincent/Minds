import React from 'react'
import PropTypes from 'prop-types'
import { forYouPosts, techPosts } from '@/data/foryoudata'
import PostSummary from '@/components/PostSummary'


const ForYou = props => {
 

  return (
    <div>
         
      <div>
      { forYouPosts.map((post, index) => (
         <div key="index">
             <PostSummary post={post} />
             </div>
        
      ))}
    </div>
    </div>
  )
}

ForYou.propTypes = {}

export default ForYou