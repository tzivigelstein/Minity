import { useContext } from 'react'
import alertContext from '../context/alerts/alertContext'

const useAlert = () => useContext(alertContext)

export default useAlert
