import React, { useEffect, useState } from 'react';

const PostList = () => {
  const [posts, setPosts] = useState([])
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response)=> response.json())
    .then((data) => setPosts(data))
    .catch((error)=> console.log("error Fetching " , error))
  }, [])
  return (
    <div>

        <h2>Post List</h2>
        <ul>
          {posts.map((post)=>(
            <li key={post.id} style={{color: 'purple'}}> {post.title}</li>
          ))}
        </ul>
      
    </div>
  )
}

export default PostList
