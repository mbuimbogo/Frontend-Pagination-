import React from 'react'

const Posts = ({posts, loading}) => {
    if(loading){
        return <h2>Loading</h2>;
    }

    const displayPosts = posts.map(post => (
        <li key={post.id} className="list-group-item">
            {post.title}
        </li>
    ))
  return <ul className='list-group mb-4'>
{displayPosts}
  </ul>
}

export default Posts
