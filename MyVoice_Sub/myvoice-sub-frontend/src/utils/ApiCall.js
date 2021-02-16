import axios from "axios";
import dotenv from "dotenv"; //환경변수 가져오기
dotenv.config();

const apiCall = axios.create({withCredentials: true});

apiCall.defaults.baseURL = process.env.REACT_APP_BACKEND_SERVER_URL;

apiCall.interceptors.response.use(
    function (response) {
        console.log("response");
        console.log(response);
        return response;
    },

    function (error) {
        console.log("error");
        console.log(error.response.status);
        if(error.response.status === 401) {  //사용자 쿠키 없음
            alert("로그아웃됨-"+error.response.status);
        }else {
            alert(error.response.status);
        }
        return Promise.reject(error);
    }
);

export default apiCall;
