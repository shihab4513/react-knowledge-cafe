import PropTypes from 'prop-types'
import React from 'react'
import Bookmarks from '../Bookmarks/Bookmarks';
const Bookmark = ({bookmark}) => {
  const {title}=bookmark;
  console.log(title)
    return (
    <div className='bg-slate-200 p-4 m-4 rounded-xl'>
        <h3 className='text-[#111] text-2xl font-semibold'>{title}</h3>
        
    </div>
  )
}

Bookmark.propTypes={
bookmark:PropTypes.object
}

export default Bookmark