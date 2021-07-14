import { SET_IS_OPEN } from './types'

export default (state, { type, payload }) => {
  switch (type) {
    case SET_IS_OPEN:
      return {
        ...state,
        isOpen: payload,
      }
    default:
      return state
  }
}
