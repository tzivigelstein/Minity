import { SET_IS_OPEN } from './types'

const modalReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_IS_OPEN:
      return {
        ...state,
        isOpen: payload
      }
    default:
      return state
  }
}

export default modalReducer
