import axios from 'axios'

const hasWindow = typeof window !== 'undefined'

const client = hasWindow && axios.create({ baseURL: window.location.origin })

export default client
