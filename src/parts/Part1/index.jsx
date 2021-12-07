import React from 'react'
import styles from './styles.module.scss'

const Part1 = () => (
  <div className={styles.part1}>
    <header>
      <ul>
        <li>
          <button onClick={() => {window.scrollTo(0, 800)}}>Videos</button>
        </li>
        <li>
          <button onClick={() => {window.scrollTo(0, 800)}}>Sobre</button>
        </li>
        <li>
          <button onClick={() => {window.scrollTo(0, 800)}}>Considerações</button>
        </li>
      </ul>
    </header>
    <main>
      <small>1º Seminário Multidisciplinar</small>
      <h2>Que droga, depender de</h2>
      <h1>DROGAS!</h1>
    </main>
  </div>
)

export default Part1