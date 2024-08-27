import { useState } from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavSide from './componets/Wrappers/NavSide'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <NavSide/>

    <Routes>
    {/* <Route exact path='/nothing' element={} /> */}
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
