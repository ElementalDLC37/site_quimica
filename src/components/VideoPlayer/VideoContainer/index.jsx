import React, { useState } from 'react'
import './styles.css'

import { connect } from 'react-redux'

const Part2 = ({ activeModule, activeLesson }) => {

  const [w, setW] = useState(610)
  const [h, setH] = useState(377)
  const [job, setJob] = useState("Aumentar")

  function aumentarTela() {
    let dimensionH = h
    let dimensionW = w

    if(job === "Diminuir") {
        dimensionH = 377
        dimensionW = 610
        setJob("Aumentar")
    }

    if(job === "Aumentar") {
      dimensionH = window.innerHeight
      dimensionW = window.innerWidth
      setJob("Diminuir")
    }

    setH(dimensionH)
    setW(dimensionW)
  }

  return (
      <div className='videoContainer'>
        <iframe src={activeLesson.link} width="100%" height="100%" allow="autoplay" style={{width: w, height: h}}></iframe>
        <div className='textos'>
          <h1>{activeLesson.title}</h1>
          <p>{activeModule.title}</p>
          <button className='buttonSizeVideo' onClick={aumentarTela}>{job}</button>
        </div>
      </div>
  )
}

export default connect(state => ({
  activeModule: state.activeModule,
  activeLesson: state.activeLesson
}))(Part2)