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

export default function tasksReducer(state, { type, payload }) {
  const TASKS_REDUCERS = {
    [SET_TASKS]: {
      ...state,
      tasks: payload,
      loading: false,
    },

    [GET_TASKS]: {
      ...state,
      tasks: payload,
      loading: false,
    },

    [ADD_TASK]: {
      ...state,
      tasks: [payload, ...state.tasks],
      taskError: false,
      loading: false,
    },

    [TASK_ERROR]: {
      ...state,
      taskError: true,
      loading: false,
    },

    [DELETE_TASK]: {
      ...state,
      tasks: state.tasks.filter(({ id }) => id !== payload),
      loading: false,
    },

    [UPDATE_TASK]: {
      ...state,
      tasks: state.tasks.map(task => (task.id === payload?.id ? payload : task)),
      selectedTask: null,
      loading: false,
    },

    [SET_SELECTED_TASK]: {
      ...state,
      selectedTask: payload,
    },

    [LOADING]: {
      ...state,
      loading: true,
    },
  }

  return TASKS_REDUCERS[type] || state
}
