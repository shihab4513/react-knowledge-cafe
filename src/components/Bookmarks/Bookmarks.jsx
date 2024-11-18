import React from 'react'
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'
import App from '../../App'
const Bookmarks = ({bookmarks,readingTime}) => {
  return (
    <div className='md:w-1/3 bg-gray-300 ml-6 pt-7 mt-10 h-full'>
        <div>
          <h3 className='text-[#6047EC] text-[1.5rem] font-bold'>Reading Time: {readingTime}</h3>
        </div>
        <h2 className='text-[1.5rem] font-bold text-[#111] text-center'>Bookmarked Blogs : {bookmarks.length}</h2>
        
        {
          bookmarks.map((bookmark,idx)=><Bookmark bookmark={bookmark} key={idx}></Bookmark>)
        }
    </div>
  )
}

Bookmarks.propTypes = {
  bookmarks: PropTypes.object,
  readingTime:PropTypes.number

}

export default Bookmarks