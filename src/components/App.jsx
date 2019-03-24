import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

const ClassComp = () => {
  return <div>Class</div>
}

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/class" exact component={ClassComp} />
    </BrowserRouter>
  )
}

export default App
