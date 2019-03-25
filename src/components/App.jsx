import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Homepage from './homepage';


const ClassComp = () => {
  return <div>Class</div>
}

const App = () => {
  return (
    
    <BrowserRouter>
      <Homepage />
      <Route path="/class" exact component={ClassComp} />
    </BrowserRouter>
  )
}

export default App
