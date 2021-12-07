import React from 'react'
import { Provider } from 'react-redux'
import store from './store'

import Part1 from './parts/Part1'
import Part2 from './parts/Part2'
import Part3 from './parts/Part3'

function App() {
  return (
    <Provider store={store}>
      <Part1 />
      <div className='play'>
        <Part2 />
        <Part3 />
      </div>
    </Provider>
  )
}

export default App
