import { createAPI } from '{{$$.relative("util")}}'
<%const project = config.projects.filter(item => item.id === data.project._id)%>
<%const baseURL = (project.length > 0) ?  project[0].baseURL : ''%>
const baseUrl = <% if(baseURL) {%>'{{$$.joinUrl(baseURL, data.project.url)}}'<%} else {%> baseURL<% } %>
<%console.log(config)%>
export default createAPI(baseUrl)
