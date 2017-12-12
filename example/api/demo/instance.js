import { createAPI } from '../util' 
import config from '../config'
const baseURL = config.baseURL
const baseUrl = (typeof baseURL === 'string') ? baseURL : baseURL['demo']
export default createAPI(baseUrl)
