// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Displayhome from './Displayhome'

const Display = () => {
  return (
    <div className='w-[100%] m-2 px-6 pt-4 rounded bg-[#1212121] text-white overflow-auto lg:w-[75%] ml-0'>
      <Routes>
        <Route path='/' element={<Displayhome/>}/>
      </Routes>
    </div>
  )
}

export default Display
