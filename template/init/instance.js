import { createAPI } from '{{$$.relative("util")}}'<%const project = config.projects.filter(item => item.id === data.project._id)%> <%const baseURL = (project.length > 0) ?  project[0].baseURL : ''%>
<%if (baseURL) {%>const baseUrl = '{{$$.joinUrl(baseURL, data.project.url)}}'<%} else {%>import config from '{{$$.relative("config")}}'
const baseURL = config.baseURL
const baseUrl = (typeof baseURL === 'string') ? baseURL : baseURL['{{project[0].name}}']<%}%>
export default createAPI(baseUrl)
