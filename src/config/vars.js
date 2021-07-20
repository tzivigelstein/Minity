const enviroment = process.env.NODE_ENV

const productionBackendUrl = process.env.NEXT_PUBLIC_PRODUCTION_BACKEND_URL
const developmentBackendUrl = process.env.NEXT_PUBLIC_DEVELOPMENT_BACKEND_URL

const baseURL = enviroment === 'production' ? productionBackendUrl : developmentBackendUrl

export { baseURL }
