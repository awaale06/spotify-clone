// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Displayhome from './Displayhome'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../assets/assets'

const Display = () => {
  const displayref = useRef();

  const location = useLocation();
  const isAlbum = location.pathname.includes('album');
  const albumId = isAlbum ? location.pathname.slice(-1) : "";
  const bgColor = albumsData[Number(albumId)].bgColor;
  console.log(bgColor);

  useEffect(()=>{
    if (isAlbum) {
      displayref.current.style.background = `linear-gradient(${bgColor}, #121212)`
    }
    else{
      displayref.current.style.background = '#121212';
    }
  })
  
  return (
    <div ref={displayref} className='w-[100%] m-2 px-6 pt-4 rounded bg-[#1212121] text-white overflow-auto lg:w-[75%] ml-0'>
      <Routes>
        <Route path='/' element={<Displayhome/>}/>
        <Route path='/album/:id' element={<DisplayAlbum/>}/>
      </Routes>
    </div>
  )
}

export default Display
