import React from 'react'
import { useSelector } from 'react-redux'


const Sidebar = () => {
  const isMenuOpen = useSelector((store) =>store.app.isMenuOpen);
  if(!isMenuOpen) return null;


  return (
    <div className='p-5 w-48 shadow-lg'>
      <ul>
        
        <li>Home</li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
        </ul> 
      <h1 className='font-bold pt-5'>Subscription</h1>
      <ul>
        
        <li>Music</li>
        <li>Gaming</li>
        <li>Sports</li>
        <li>Movies</li>
        </ul> 
        <h1 className='font-bold'>Watch Later</h1>
        <ul>
        <li>Music</li>
        <li>Gaming</li>
        <li>Sports</li>
        <li>Movies</li>
        </ul>
         
    </div>
  )
}

export default Sidebar
