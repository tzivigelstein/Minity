import { useContext } from 'react'
import authContext from '../context/auth/authContext'

const useAuth = () => useContext(authContext)

export default useAuth
