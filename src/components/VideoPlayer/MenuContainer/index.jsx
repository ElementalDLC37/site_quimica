import React, { useState } from 'react'
import './styles.css'
import { connect } from 'react-redux'

function toggleLesson(module, lesson) {
  return {
    type: 'TOGGLE_LESSON',
    module,
    lesson,
  }
}

const MenuContainer = ({ modules, dispatch }) => {
  const [valSel, setValSel ] = useState(0)

  const handleA = () => {
    setValSel(0)
  }

  const handleB = () => {
    setValSel(1)
  }

  const handleC = () => {
    setValSel(2)
  }

  return (
    <div className='menuContainer'>
        <div className='videoRow'>
          <div className="toggleButton">
            <p>Primeiro ano:</p>
            <button onClick={handleA} id='a'>A</button>
            <button onClick={handleB} id='b'>B</button>
            <button onClick={handleC} id='c'>C</button>
          </div>
          <div className="list">
            <div className="listArea">
              {modules[valSel].lessons.map(lesson => (
                <div key={lesson.id} className="item">
                  <button key={valSel} className='buttonMenu' onClick={() => dispatch(toggleLesson(modules[valSel], lesson))}>{lesson.title}</button>
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  )
}

export default connect(state => ({ modules: state.modules }))(MenuContainer)