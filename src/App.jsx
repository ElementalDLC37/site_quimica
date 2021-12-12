import React from 'react'
import { Provider } from 'react-redux'
import store from './store'

import Apresentation from './components/Apresentation'
import VideoPlayer from './components/VideoPlayer'

function App() {
  return (
    <Provider store={store}>
      <Apresentation />
      <VideoPlayer />
    </Provider>
  )
}

export default App
