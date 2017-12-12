/**
 * Created by liubingwen on 2017/12/12.
 */

/**
 * baseURL 为字符串时 所有接口都使用它 为对象时 项目接口baseURL为 baseURL[project.name]
 */
export default {
  baseURL: typeof baseURL === 'undefined' ? '' : baseURL // 请使用webpack DefinePlugin 配置baseURL全局参数
}
