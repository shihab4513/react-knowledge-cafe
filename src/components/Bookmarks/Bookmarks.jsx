import React from 'react'
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'
import App from '../../App'
const Bookmarks = ({bookmarks}) => {
  return (
    <div className='md:w-1/3 bg-gray-300 ml-6 pt-7 mt-10'>
        <h2 className='text-[1.5rem] font-bold text-[#111] text-center'>Bookmarked Blogs : {bookmarks.length}</h2>
        
        {
          bookmarks.map(bookmark=><Bookmark bookmark={bookmark} key={bookmark.id}></Bookmark>)
        }
    </div>
  )
}

Bookmarks.propTypes = {
  bookmarks: PropTypes.object
}

export default Bookmarks