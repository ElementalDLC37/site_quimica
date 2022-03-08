import React from 'react'
import './styles.css'
import { connect } from 'react-redux'
import MenuContainer from '../MenuContainer'

const Part2 = ({ activeModule, activeLesson }) => {
  return (
      <div className='videoContainer'>
        <iframe src={activeLesson.link} allow='autoplay'  allowFullScreen></iframe>
        <div className='textomenu'>
          <div className='textos'>
            <h1>{activeLesson.title}</h1>
            <p>{activeModule.title}</p>
          </div>
          <div className='menu'>
            <MenuContainer />
          </div>
        </div>
      </div>
  )
}

export default connect(state => ({
  activeModule: state.activeModule,
  activeLesson: state.activeLesson
}))(Part2)