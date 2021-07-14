import React, { useReducer } from 'react'
import ModalContext from './modalContext'
import modalReducer from './modalReducer'
import { SET_IS_OPEN } from './types'

const initialState = {
  isOpen: false,
}

const ModalState = ({ children }) => {
  const [state, dispatch] = useReducer(modalReducer, initialState)

  const setIsOpen = state => {
    dispatch({
      type: SET_IS_OPEN,
      payload: state,
    })
  }

  return (
    <ModalContext.Provider
      value={{
        isOpen: state.isOpen,
        setIsOpen,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export default ModalState
