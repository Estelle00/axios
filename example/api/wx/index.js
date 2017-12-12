import instance from './instance'
import { convertRESTAPI } from '../util'

/** rest */
function testPost (opts) {
  return instance({
    method: 'post',
    url: '/test',
    opts: opts
  })
}

/** 微信签名 */
function getWxSignParPost (opts) {
  return instance({
    method: 'post',
    url: '/getWxSignPar',
    opts: opts
  })
}

export {
  testPost,
  getWxSignParPost
}
