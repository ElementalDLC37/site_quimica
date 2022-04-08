import React from 'react'
import Background from './Background'
import "./styles.css"

const Apresentation = () => {
  window.onblur = () => {
    Background.onblur
  }

  window.onfocus = () => {
    Background.onfocus
  }

  return (
    <div className='apresentation'>
      <header>
        <ul>
          <li>
            <button className='buttonHeader' onClick={() => {window.scrollTo(0, 800)}}>Videos</button>
          </li>
          <li>
            <button className='buttonHeader' onClick={() => {window.scrollTo(0, 800)}}>Sobre</button>
          </li>
          <li>
            <button className='buttonHeader' onClick={() => {window.scrollTo(0, 800)}}>Considerações</button>
          </li>
        </ul>
      </header>
      <main className='apresentationSlogan'>
        <small>1º Seminário Multidisciplinar</small>
        <h2>Que droga, depender de</h2>
        <h1>DROGAS!</h1>
      </main>
      <div className="background">
        <Background />
      </div>
    </div>
  )
}

export default Apresentation