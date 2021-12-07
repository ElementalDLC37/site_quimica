import React, { useState } from 'react'
import './styles.css'
import { connect } from 'react-redux'
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md'

function toggleLesson(module, lesson) {
  return {
    type: 'TOGGLE_LESSON',
    module,
    lesson,
  }
}

const Part3 = ({ modules, dispatch }) => {
  const [scrollX, setScrollX] = useState(0);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2)
    if(x > 0) {
      x = 0
    }
    setScrollX(x)
    x = null
  }

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2)
    let listW = (modules[0].lessons.length * 200)

    if((window.innerWidth - listW) > x) {
      x = (window.innerWidth - listW) - 250
    }
    setScrollX(x)
  }

  const primA = 0
  const primB = 1
  const primC = 2

  const [valSel, setValSel ] = useState(0)

  const handleSelect = e => {
    setValSel(e.target.value)
  }

  return (
    <div className="part3">
        <div className="videoRow">

          <select onChange={handleSelect} value={valSel} >
            <option value={primA}>1º Ano A</option>
            <option value={primB}>1º Ano B</option>
            <option value={primC}>1º Ano C</option>
          </select>

          <div className="arrowLeft" onClick={handleLeftArrow}>
            <MdNavigateBefore style={{fontSize: 55}} />
          </div>

          <div className="arrowRight" onClick={handleRightArrow}>
            <MdNavigateNext style={{fontSize: 55}} />
          </div>

          <div className="listArea">
            <div className="list" style={{ marginLeft: scrollX, width: (180 * modules[valSel].lessons.length) }}>
              {modules[valSel].lessons.map(lesson => (
                <div key={lesson.id} className="item">
                  <button key={lesson.id} onClick={() => dispatch(toggleLesson(modules[valSel], lesson))}>{lesson.title}</button>
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  )
}

export default connect(state => ({ modules: state.modules }))(Part3)
