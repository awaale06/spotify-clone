// eslint-disable-next-line no-unused-vars
import React from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'

const App = () => {
  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Sidebar/>
      </div>
      <Player/>
    </div>
  )
}

export default App
