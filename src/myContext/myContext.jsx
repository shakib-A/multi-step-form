import React, { useReducer, createContext } from 'react'
export const myContext = createContext(null)
const initialState = {
stepOneValues: {
  name: '',
  email: '',
  phone: '',
  },
stepTwoValues: {
  planName: 'arcade',
  isMonthly: true
  },
stepThreeValues: {
    addOns: []
  }
}
const reducer = (state, action) => {
    switch(action.type) {
      case 'UPDATE_FIRST_FORM':
        return { ...state, stepOneValues: action.payload }
      case 'UPDATE_SECOND_FORM':
        return { ...state, stepTwoValues: action.payload }
      case 'UPDATE_THIRD_FORM': 
       return { ...state, stepThreeValues: action.payload }
    } 
}

const MyContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <myContext.Provider value={{ state, dispatch }}>
        {children}
    </myContext.Provider>
  )
}

export default MyContextProvider