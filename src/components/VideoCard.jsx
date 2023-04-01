import React from 'react'
import '../App.css'

const VideoCard = ({name}) => {
  return (
    <div className='video-container'>
        <video src={"https://d33a9k4anozn7y.cloudfront.net/"+name} controls='true' type='video/mp4'>
        </video>
        <div className='overlay'>
            <h2>{(name.slice(0,-4)).split('%20').join(' ')}</h2>
        </div>
    </div>
  )
}

export default VideoCard