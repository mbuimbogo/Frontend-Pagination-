import React from 'react'
import Posts from './Posts';
import { useState, useEffect } from 'react';
import Pagination from './Pagination';

import axios from 'axios';
import { Redirect } from 'react-router-dom';



const Home = (isLoggedIn) => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
 
   
  
    useEffect(() => {
      const fetchPosts = async () => {
        setLoading(true);
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setPosts(res.data);
        setLoading(false)
      }
      fetchPosts();
    },[]);
  
    // console.log(posts)

    //Getting current post
const indexOfLastPost = currentPage*postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost)

//Change page
const paginate = (pageNumber) => setCurrentPage(pageNumber)  
if(!isLoggedIn) return <Redirect to = "/login" />
  return (
    <div className='container mt-5'>
    <h1 className='text-primary mb-3'>My Blogs</h1>
    <Posts posts={currentPosts} loading={loading}/>
    <Pagination totalPosts={posts.length} postsPerPage={postsPerPage} paginate={paginate}/>
   
    <div className="card text-center">
  <div className="card-header">
    Featured
  </div>
  <div className="card-body">
    <h5 className="card-title">~Cory Doctorow~ </h5>
    <p className="card-text">Conversation is king. Content is just something to talk about.</p>
    <a href="about" className="btn btn-primary">See more</a>
  </div>
  <div className="card-footer text-muted">
  Adios!
  </div>
</div>
  </div>
  )
}

export default Home;