import React from 'react'

const StepFour = ({ plan, addOns, monthly }) => {


  const selectedAddOn = addOns.filter((addOn) => {
    if(addOn.isChecked) {
      return addOn
    } else {return}
  })

  function totalCost() {
    let planCost = plan.cost.match(/\d/g)
    planCost = parseInt(planCost.join(''))

    let addOnCosts = selectedAddOn.map((selected) => {
      let cost = selected.cost.match(/\d/g)
      cost = parseInt(cost.join(''))
      return cost
    })

    let sumOfAddOnsCost = 0
    addOnCosts.forEach(cost => {
      sumOfAddOnsCost += cost
    });

    return planCost + sumOfAddOnsCost
  }


  return (
    <div>
      <h1>Finishing up</h1>
      <p>Doubl-check everything looks OK before confirming</p>
      <div id="panel-1" className='flex justify-between items-center'>
        <h1>{`${plan.planName} (${monthly ? 'monthly' : 'yearly'})`}</h1>
        <h1>{`$${plan.cost}`}</h1>
      </div>
      <button>change</button>

      {selectedAddOn[0] && selectedAddOn.map((selected, index) => (
        <div key={index} className='flex justify-between'>
        <h1>{selected.name}</h1>
        <h1>{selected.cost}</h1>
      </div>
      ))}

      <div className='flex justify-between'>
        <h1>{`Total (${monthly ? 'per month' : 'per year'})`}</h1>
        <h1>{`+$${totalCost()}${monthly ? '/mo' : '/yr'}`}</h1>
      </div>
    </div>
  )
}

export default StepFour