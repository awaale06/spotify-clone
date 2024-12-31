import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets } from '../assets/assets';

const DisplayAlbum = () => {

    const {id} = useParams();
    const albumData = albumsData[id];
    
    
  return (
    <>
    <Navbar/>
    <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
        <img src={albumData.image} className='w-48 rounded' alt="" />
        <div className='flex flex-col'>
            <p>PlayLists</p>
            <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name} </h2>
            <h4>{albumData.desc} </h4>
            <p className='mt-1'>
                <img src={assets.spotify_logo} className='inline-block w-5' alt="" />
                <b>Spotify</b>
                 .1,238,742 likes
                 . <b>50 songs,</b>
                 about 2 hr 30 min
            </p>
        </div>
    </div>

    </>
  )
}

export default DisplayAlbum