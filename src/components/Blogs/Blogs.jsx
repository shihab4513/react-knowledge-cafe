import { data } from 'autoprefixer';

import React, { useEffect, useState } from 'react'
import Blog from '../Blog/Blog';


const Blogs = () => {
    const [blogs,setBlogs]=useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
  return (
    <div className='w-2/4'>
      <h1 className='md:text-4xl'>Blogs : {blogs.length}</h1>

      {
        blogs.map(blog=><Blog key={blog.id} blog={blog}></Blog>)
      }
    </div>
  )
}

export default Blogs