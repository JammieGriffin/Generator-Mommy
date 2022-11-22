
const BASE_URL = "http://localhost:3000"
export const axiosConf = {
  baseURL:BASE_URL,
  headers:{
    "Content-Type":"application/json"
  },
  timeout: 1000 * 30
}