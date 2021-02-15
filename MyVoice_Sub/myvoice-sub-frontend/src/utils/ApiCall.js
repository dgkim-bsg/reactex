import axios from "axios";
import dotenv from "dotenv"; //환경변수 가져오기
dotenv.config();

const apiCall = axios.create();

apiCall.defaults.baseURL = process.env.REACT_APP_BACKEND_SERVER_URL;
export default apiCall;
