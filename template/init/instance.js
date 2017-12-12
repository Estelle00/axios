import { createAPI, isJson } from '{{$$.relative("util")}}'<%const project = config.projects.filter(item => item.id === data.project._id)%> <%const baseURL = (project.length > 0) ?  project[0].baseURL : ''%>
<%if (baseURL) {%>const baseUrl = '{{$$.joinUrl(baseURL, data.project.url)}}'<%} else {%>import config from '{{$$.relative("config")}}'
const baseURL = config.baseURL
const baseUrl = isJson(baseURL) ? baseURL['{{project[0].name}}'] : baseURL<%}%>
export default createAPI(baseUrl)
