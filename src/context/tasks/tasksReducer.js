import {
  GET_TASKS,
  ADD_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  SET_SELECTED_TASK,
  TASK_ERROR,
  LOADING,
  SET_TASKS,
} from './types'

export default (state, { type, payload }) => {
  switch (type) {
    case SET_TASKS:
      return {
        ...state,
        tasks: payload,
        loading: false,
      }

    case GET_TASKS:
      return {
        ...state,
        tasks: payload,
        loading: false,
      }

    case ADD_TASK:
      return {
        ...state,
        tasks: [payload, ...state.tasks],
        taskError: false,
        loading: false,
      }

    case TASK_ERROR:
      return {
        ...state,
        taskError: true,
        loading: false,
      }

    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(({ _id }) => _id !== payload),
        loading: false,
      }

    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task => (task._id === payload._id ? payload : task)),
        selectedTask: null,
        loading: false,
      }

    case SET_SELECTED_TASK:
      return {
        ...state,
        selectedTask: payload,
      }

    case LOADING:
      return {
        ...state,
        loading: true,
      }

    default:
      return state
  }
}
