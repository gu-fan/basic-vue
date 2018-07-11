import axios from 'axios'

const setToken = (token, type)=>{
  if (token) {
    axios.defaults.headers.common['Authorization'] = `${type} ${token}`
  } else {
    axios.defaults.headers.common['Authorization'] = null
  }
}
const saveToken = ()=>{

}


var BASE_URL
if (process && process.env.NODE_ENV  && process.env.NODE_ENV == "development") {
    axios.defaults.baseURL = 'http://localhost:4000';
} else {
    axios.defaults.baseURL = 'http://123.207.53.21';
}

axios.defaults.timeout = 3000;



export default axios
// export default {
//   BASE_URL,
//   setToken,
//   http:axios,
// }
