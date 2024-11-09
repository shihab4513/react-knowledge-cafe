import React from 'react'
import PropTypes from 'prop-types';
import '../Blog/Blog.css'

const Blog = ({blog}) => {
  const {title,cover,reading_time,author_img,author,posted_date,hashtags}=blog;
    return (
    <div>
        <img src={cover} alt={`Cover picture of the title '${title} '`} srcset="" />
        <div className='flex justify-between'>
            <div className='flex justify-between'>
                <img className='w-14' src={author_img} alt="" />
                <div className='ml-6'>
                    <h3 className='text-[1.5rem] font-bold text-[#111111]'>{author}</h3>
                    <p className='sixty text-[1rem] font-semibold'>{posted_date}</p>
                </div>
                
            </div>
            <div>
                <span className='sixty text-[1.25rem] font-medium'>{reading_time} min read </span>
            </div>
        </div>
        <h2 className="text-[2.5rem] font-bold text-[#111111]">{title}</h2>
        <p>
            {
                hashtags.map(hash=><span className='text-[1.25rem] sixty font-medium'><a href="">#{hash}</a></span>)
            }
        </p>
    </div>
  )
}
// How to remove proptype error warning
// npm install --save prop-types
Blog.PropTypes={
    blog: PropTypes.object.isRequired
}
export default Blog