import React from 'react'
import './styles.css'

import VideoContainer from './VideoContainer'
import MenuContainer from './MenuContainer'

const VideoPlayer = () => {
  return (
    <div className='videoPlayer'>
        <VideoContainer />
        <MenuContainer />
    </div>
  )
}

export default VideoPlayer