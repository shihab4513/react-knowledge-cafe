import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {
  const [bookmarks,setBookmarks]=useState([]);
  const [readingTime,setReadingTime]=useState(0);
  const handleBookMark=blog=>{
    const newBookmarks=[...bookmarks,blog];
    setBookmarks(newBookmarks);
  }
  const handleMarkAsRead=(id,time)=>{
    const newReadingTime=readingTime+time;
    setReadingTime(newReadingTime);
    // remove mark as read blog from bookmarks. basically what below edited code does is suppose if you bookmark a blog, then after you reading that blog you click mark as read then the blog got deleted from bookmarks
    // console.log('remove bookmark id',id);
    const remainingBookmarks=bookmarks.filter(bookmark=>bookmark.id!==id);
    setBookmarks(remainingBookmarks);
    
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleMarkAsRead={handleMarkAsRead} handleBookMark={handleBookMark}></Blogs> 
      <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>           
      </div>
      
    </>
  )
}

export default App
