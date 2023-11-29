import React from 'react'
import { StepOne, StepTwo, StepThree, StepFour } from './components/steps'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      {/* mobile design */}
      <div className='flex flex-col justify-center items-center md:hidden'>
        <Navigation />
        <div className='w-[375px] flex flex-col justify-center items-center absolute top-32 bg-White rounded-lg p-4'>  
          <StepOne />
          <StepTwo />
          <StepThree />
          <StepFour />
          <Footer />
        </div>
      </div>

      {/* desktop design */}
      <div className='hidden md:flex h-screen justify-center items-center'>
        <div className='bg-White flex justify-center items-start gap-10 p-5 rounded-md'>
          <div className='w-[250px] h-[500px] bg-Desktop bg-cover bg-center bg-no-repeat rounded-md'>
            <Navigation />
          </div>
          <div>
            <StepOne />
          </div>
        </div>
      </div>
    </>
  )
}

export default App