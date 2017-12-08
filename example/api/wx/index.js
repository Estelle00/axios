import instance from './instance'
import { convertRESTAPI } from '../util'

/** 微信签名 */
function getWxSignParPost (opts) {
  return instance({
    method: 'post',
    url: '/getWxSignPar',
    opts: opts
  })
}

export {
  getWxSignParPost
}
