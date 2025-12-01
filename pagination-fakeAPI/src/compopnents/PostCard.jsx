import React from 'react'

const PostCard = ({ post }) => {
  return (
    <div className='post-card'>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  )
}

export default PostCard
