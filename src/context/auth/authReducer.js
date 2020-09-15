import {
    SUCCESS_REGISTER,
    ERROR_REGISTER,
    SUCCESS_LOGIN,
    ERROR_LOGIN,
    GET_USER,
    LOG_OUT
} from '../../types/index'

export default (state, action) => {
    switch (action.type) {
        case SUCCESS_REGISTER:
        case SUCCESS_LOGIN:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                auth: true,
                msg: null,
                loading: false
            }
        case GET_USER:
            return {
                ...state,
                auth: true,
                user: action.payload,
                loading: false
            }
        case LOG_OUT:
        case ERROR_LOGIN:
        case ERROR_REGISTER:
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                user: null,
                msg: action.payload,
                auth: null,
                loading: false
            }
        default:
            return state
    }
}