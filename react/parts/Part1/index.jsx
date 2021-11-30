import React from 'react'
import styles from './styles.module.scss'

function Part1() {
  return (
    <div className={styles.part1}>
      <header>
            <ul>
                <li>
                    <button onClick={() => {window.scrollTo(0, 800)}}>Videos</button>
                </li>

                <li><button onClick={() => {window.scrollTo(0, 800)}}>Sobre</button>
                </li>

                <li>
                    <button onClick={() => {window.scrollTo(0, 800)}}>Considerações</button>
                </li>
            </ul>
        </header>
        <main>
            <h2>Conscientização sobre as</h2>
            <h1>DROGAS</h1>
        </main>
    </div>
  )
}

export default Part1