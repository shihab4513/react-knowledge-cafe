import { data } from 'autoprefixer';

import React, { useEffect, useState } from 'react'
import Blog from '../Blog/Blog';
import PropTypes from 'prop-types';


const Blogs = ({handleBookMark}) => {
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
        blogs.map(blog=><Blog handleBookMark={handleBookMark} key={blog.id} blog={blog}></Blog>)
      }
    </div>
  )
}

Blogs.propTypes={
  handleBookMark:PropTypes.func
}

export default Blogs