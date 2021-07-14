import axios from 'axios'
import { baseURL } from './vars'

const client = axios.create({ baseURL })

export default client
