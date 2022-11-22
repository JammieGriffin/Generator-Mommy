import { axiosConf } from "../const";
import axios from "axios"

const baseAxios = axios.create(axiosConf);

export default baseAxios;