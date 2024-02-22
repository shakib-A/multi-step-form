import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StepOne from './components/StepOne'
import StepTwo from './components/StepTwo'
import StepThree from './components/StepThree'
import StepFour from './components/StepFour'
import Navigation from './components/Navigation'
import Thanks from './components/Thanks'


const App = () => {

  
  
  return (
     <BrowserRouter>
     <div className='w-screen h-[100vh] sm:flex-row sm:flex sm:bg-white sm:w-[750px] sm:h-[500px] sm:justify-start sm:p-2 sm:rounded-lg'>
      <Navigation />
      <Routes>
        <Route path='/' element={<StepOne />} />
        <Route path='/stepTwo' element={<StepTwo />} />
        <Route path='/stepThree' element={<StepThree />} />
        <Route path='/stepFour' element={<StepFour />} />
        <Route path='/thanks' element={<Thanks />} />
      </Routes>
     </div>
     </BrowserRouter>
  )
}

export default App