import React, { useState, createContext } from 'react'
import { StepOne, StepTwo, StepThree, StepFour } from './components/steps'
import Navigation from './components/Navigation'
import Thanks from './components/Thanks'

export const radioContext = createContext()
export const footerContext = createContext()

const App = () => {

  const [plans, setPlans] = useState([
    {
      id: 0,
      planName: 'arcade',
      icon: 'bg-Arcade',
      price: '$9/mo',
      isSelected: true
    },
    {
      id: 1,
      planName: 'advanced',
      icon: 'bg-Advanced',
      price: '$12/mo',
      isSelected: false
    },
    {
      id: 2,
      planName: 'pro',
      icon: 'bg-Pro',
      price: '$15/mo',
      isSelected: false
    },
  ])

  const [isMonthly, setIsMonthly] = useState(true)

  const [addOns, setAddOns] = useState([
    {
      id: 0,
      isChecked: false,
      name:'Online sevice',
      description: 'Access to multiplayer games',
      price: '+$1/mo'
    },
    {
      id: 1,
      isChecked: false,
      name:'Larger storage',
      description: 'Extra 1TB of cloud save',
      price: '+$2/mo'
    },
    {
      id: 2,
      isChecked: false,
      name:'Customizable profile',
      description: 'Custom theme on your profile',
      price: '+$2/mo'
    },
  ])

  const [activePage, setActivePage] = useState([
    {
      id:0,
      isActive: false
    },
    {
      id:1,
      isActive: true
    },
    {
      id:2,
      isActive: false
    },
    {
      id:3,
      isActive: false
    },
    {
      id:4,
      isActive: false
    }
  ])

  function handleSelectPlan(id) {
    const newPlans = plans.map((plan, index) => {
      if(index === id) {
        plan.isSelected = true
        return plan
      } else {
        plan.isSelected = false
        return plan
      }
    })
    setPlans(newPlans)
  }

  function handleSelectAddOn(id) {
    let newAddOns = addOns.map((addOn, index) => {
      if(index === id){
        return {
          ...addOn,
          isChecked: !addOn.isChecked
        } 
      } else return addOn
    })
    setAddOns(newAddOns)
  }

  function handleChangeMonthly() {
    if(isMonthly) {
      let newPlans = plans.map((plan) => {
        return {
          ...plan,
          price: plan.price.replace('/mo', '0/yr') 
        }
      })

      let newAddOns = addOns.map((addOn) => {
        return {
          ...addOn,
          price: addOn.price.replace('/mo', '0/yr')
        }
      })

      setAddOns(newAddOns)
      setPlans(newPlans)
    } else {
      let newPlans = plans.map((plan) => {
        return {
          ...plan,
          price: plan.price.replace('0/yr', '/mo') 
        }
      })

      let newAddOns = addOns.map((addOn) => {
        return {
          ...addOn,
          price: addOn.price.replace('0/yr', '/mo')
        }
      })
      setAddOns(newAddOns)
      setPlans(newPlans)
    }
    setIsMonthly(!isMonthly)
  }

  function handleNextStep(id) {
    if(id === 4){return}
    let newActivePage = activePage.map((page, index) => {
      if(page.isActive) {
        return {...page, isActive: false}
      } else return page
    })
    newActivePage[id + 1].isActive = true
    setActivePage(newActivePage)
  }
  
  function handleGoBack(id) {
    if(id === 0){return}
    let newActivePage = activePage.map((page, index) => {
      if(page.isActive) {
        return {...page, isActive: false}
      } else return page
    })
    newActivePage[id - 1].isActive = true
    setActivePage(newActivePage)
  }


  return (
    <div className='flex flex-col justify-center items-center md:flex-row md:justify-start md:items-start bg-White top-0 mt-32 md:mt-0 md:h-[650px] md:w-[830px] md:p-3 md:pr-0 md:rounded-xl p-4 rounded-xl'>
        <Navigation
          activePage={activePage}
        />
      <div className='md:flex md:flex-col justify-start items-center md:h-full'>
        <footerContext.Provider value={{ activePage, handleNextStep, handleGoBack}}>
          {activePage[0].isActive && <StepOne />}

          <radioContext.Provider value={ {isMonthly, handleChangeMonthly} }>
            {activePage[1].isActive && 
            <StepTwo
            plans={plans}
            handleSelectPlan={handleSelectPlan}
            />
          }
          </radioContext.Provider>

          {activePage[2].isActive && <StepThree 
            addOns={addOns}
            handleSelectAddOn={handleSelectAddOn}
             />}
          {activePage[3].isActive && <StepFour
            plans={plans}
            addOns={addOns}
            isMonthly={isMonthly}
            />}
        </footerContext.Provider>
        {activePage[4].isActive && <Thanks />}
      </div>
    </div>
  )
}

export default App