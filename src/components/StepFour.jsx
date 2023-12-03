import React from 'react'

const StepFour = ({ plan, addOns, monthly }) => {
  return (
    <div>
      <h1>Finishing up</h1>
      <p>Doubl-check everything looks OK before confirming</p>
      <div id="panel-1" className='flex justify-between items-center'>
        <h1>{`${plan.planName} (${monthly ? 'monthly' : 'yearly'})`}</h1>
        <h1>{`$${plan.cost}`}</h1>
      </div>
      <button>change</button>
    </div>
  )
}

export default StepFour