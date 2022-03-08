import {
  GET_TASKS_SUCCESSFUL,
  ADD_TASK_SUCCESSFUL,
  DELETE_TASK,
  UPDATE_TASK,
  SET_SELECTED_TASK,
  TASK_ERROR,
  GET_TASKS_LOADING,
  SET_TASKS_SUCCESSFUL,
  SET_TASKS_LOADING,
  GET_TASKS_ERROR,
  ADD_TASK_FINALLY,
  ADD_TASKS_LOADING,
  DELETE_TASK_ERROR,
  UPDATE_TASK_LOADING,
  SET_TASKS_LIST_ORDER
} from './types'

const DEFAULT_TASKS_ORDER = {
  LATEST: (a, b) => (new Date(a.date).getTime() < new Date(b.date).getTime() ? 1 : -1),
  DONE: a => (a.state ? -1 : 1),
  TODO: a => (a.state ? 1 : -1)
}

export default function tasksReducer(state, { type, payload }) {
  const TASKS_REDUCERS = {
    [SET_TASKS_SUCCESSFUL]: {
      ...state,
      tasks: payload,
      setTasksLoading: false
    },

    [GET_TASKS_SUCCESSFUL]: {
      ...state,
      tasks: payload,
      getTasksLoading: false
    },

    [ADD_TASK_SUCCESSFUL]: {
      ...state,
      tasks: [payload, ...state.tasks],
      taskError: false
    },

    [TASK_ERROR]: {
      ...state,
      taskError: true,
      loading: false
    },

    [DELETE_TASK]: {
      ...state,
      cachedTasks: state.tasks,
      tasks: state.tasks.filter(task => task?.id !== payload?.id),
      deleteTaskLoading: true
    },

    [DELETE_TASK_ERROR]: {
      ...state,
      tasks: state.cachedTasks
    },

    [UPDATE_TASK]: {
      ...state,
      tasks: state.tasks.map(task => (task.id === payload?.id ? payload : task)),
      selectedTask: null,
      updateTaskLoading: false
    },

    [ADD_TASKS_LOADING]: {
      ...state,
      addTaskLoading: true
    },

    [SET_SELECTED_TASK]: {
      ...state,
      selectedTask: payload
    },

    [GET_TASKS_LOADING]: {
      ...state,
      getTasksLoading: true
    },

    [SET_TASKS_LOADING]: {
      ...state,
      setTasksLoading: true
    },

    [UPDATE_TASK_LOADING]: {
      ...state,
      updateTaskLoading: true
    },

    [GET_TASKS_ERROR]: {
      ...state,
      getTasksLoading: false
    },
    [ADD_TASK_FINALLY]: {
      ...state,
      addTaskLoading: false
    },

    [SET_TASKS_LIST_ORDER]: {
      ...state,
      tasks: state.tasks.sort(DEFAULT_TASKS_ORDER[payload])
    }
  }

  return TASKS_REDUCERS[type] || state
}
