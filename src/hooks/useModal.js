import { useContext } from 'react'
import modalContext from '../context/modal/modalContext'

const useModal = () => useContext(modalContext)

export default useModal
