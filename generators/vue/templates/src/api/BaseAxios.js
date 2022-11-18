import axios from "axios";
import { axiosConf } from "../const";

const baseAxios = axios.create(axiosConf)

export default baseAxios;
