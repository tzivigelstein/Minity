import {
    PROJECT_TASKS,
    ADD_TASK,
    TASK_ERROR,
    DELETE_TASK,
    ACTUAL_TASK,
    UPDATE_TASK
} from '../../types'

export default (state, action) => {
    switch (action.type) {
        case PROJECT_TASKS:
            return {
                ...state,
                tasksproject: action.payload
            }
        case ADD_TASK:
            return {
                ...state,
                tasksproject: [action.payload, ...state.tasksproject],
                taskerror: false
            }
        case TASK_ERROR:
            return {
                ...state,
                taskerror: true
            }
        case DELETE_TASK:
            return {
                ...state,
                tasksproject: state.tasksproject.filter(task => task._id !== action.payload)
            }
        case UPDATE_TASK:
            return {
                ...state,
                tasksproject: state.tasksproject.map(task => task._id === action.payload._id ? action.payload : task),
                selectedtask: null
            }
        case ACTUAL_TASK:
            return {
                ...state,
                selectedtask: action.payload
            }
        default:
            return state
    }
}