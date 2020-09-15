import {
    FORM_PROJECT,
    GET_PROJECTS,
    ADD_PROJECTS,
    FORM_VALIDATION,
    ACTUAL_PROJECT,
    DELETE_PROJECT,
    PROJECT_ERROR
} from '../../types/index';

export default (state, action) => {
    switch (action.type) {
        case FORM_PROJECT:
            return {
                ...state,
                form: true
            }
        case GET_PROJECTS:
            return {
                ...state,
                PROJECTS: action.payload
            }
        case ADD_PROJECTS:
            return {
                ...state,
                PROJECTS: [...state.PROJECTS, action.payload],
                form: false,
                errorform: false
            }
        case FORM_VALIDATION:
            return {
                ...state,
                errorform: true
            }
        case ACTUAL_PROJECT:
            return {
                ...state,
                project: state.PROJECTS.filter(project => project._id === action.payload)
            }
        case DELETE_PROJECT:
            return {
                ...state,
                PROJECTS: state.PROJECTS.filter(project => project._id !== action.payload),
                project: null
            }
        case PROJECT_ERROR:
            return {
                ...state,
                msg: action.payload
            }
        default:
            return state
    }


}