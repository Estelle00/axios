import instance from './instance'
import { convertRESTAPI } from '../util'

/** 微信签名 */
function wxGetWxSignParPost(opts) {
  return instance({
    method: 'post',
    url:  '/wx/getWxSignPar',
    opts: opts
  })
}

/** 领取奖品 */
function double12ReceivePrizePost(opts) {
  return instance({
    method: 'post',
    url:  '/double12/receivePrize',
    opts: opts
  })
}

/** 提交投保订单 */
function double12SubmitInsOrderPost(opts) {
  return instance({
    method: 'post',
    url:  '/double12/submitInsOrder',
    opts: opts
  })
}

/** template */
function double12QueryCodePost(opts) {
  return instance({
    method: 'post',
    url:  '/double12/queryCode',
    opts: opts
  })
}

/** 手机品牌列表 */
function double12BrandListGet(opts) {
  return instance({
    method: 'get',
    url:  '/double12/brandList',
    opts: opts
  })
}

/** 地区数据 */
function double12AreaListGet(opts) {
  return instance({
    method: 'get',
    url:  '/double12/areaList',
    opts: opts
  })
}

export {
  wxGetWxSignParPost,
  double12ReceivePrizePost,
  double12SubmitInsOrderPost,
  double12QueryCodePost,
  double12BrandListGet,
  double12AreaListGet
}
