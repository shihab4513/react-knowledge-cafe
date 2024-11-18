import React from 'react'
import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa";
import '../Blog/Blog.css'

const Blog = ({blog,handleBookMark,handleMarkAsRead}) => {
  const {id,title,cover,reading_time,author_img,author,posted_date,hashtags}=blog;
    return (
    <div className='mb-20'>
        <img className='w-full mb-8' src={cover} alt={`Cover picture of the title '${title} '`} srcset="" />
        <div className='flex justify-between'>
            <div className='flex justify-between'>
                <img className='w-14' src={author_img} alt="" />
                <div className='ml-6'>
                    <h3 className='text-[1.5rem] font-bold text-[#111111]'>{author}</h3>
                    <p className='sixty text-[1rem] font-semibold'>{posted_date}</p>
                </div>
                
            </div>
            <div className='flex items-center'>
                <span className='sixty text-[1.25rem] font-medium'>{reading_time} min read </span>
                <button onClick={()=>handleBookMark(blog)} className='ml-2 text-2xl text-red-600'><FaRegBookmark></FaRegBookmark></button>
            </div>
        </div>
        <h2 className="text-[2.5rem] font-bold text-[#111111] mt-4 mb-4">{title}</h2>
        <p>
            {
                hashtags.map(hash=><span className='text-[1.25rem] sixty font-medium'><a href="">#{hash}</a></span>)
            }
        </p>
        <button className='mt-3 text-[#6047EC] text-[1.25rem] font-semibold underline' onClick={()=>handleMarkAsRead(id,reading_time)}>Mark as read</button>
    </div>
  )
}
// How to remove proptype error warning
// npm install --save prop-types
Blog.propTypes={
    blog: PropTypes.object.isRequired,
    handleBookMark:PropTypes.func,
    handleMarkAsRead:PropTypes.func
}
export default Blog