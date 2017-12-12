import { createAPI, isJson } from '../util' 
import config from '../config'
const baseURL = config.baseURL
const baseUrl = isJson(baseURL) ? baseURL['demo'] : baseURL
export default createAPI(baseUrl)
