import cors from "@koa/cors";
import Koa from "koa";
import Router from "koa-router";
import bodyParser from "koa-bodyparser";
import mongoose from "mongoose";
import api from './api';
import dotenv from "dotenv"; //환경변수 가져오기
dotenv.config();

mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useFindAndModify: false,
    })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((e) => {
        console.error(e);
    });

const app = new Koa();
const router = new Router();
router.use('/api', api.routes()); // api 라우트 적용

app.use(cors());

// 라우터 적용 전에 bodyParser 적용
app.use(bodyParser());
// app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

app.listen(process.env.SERVER_PORT, () => {
    console.log("MyVoice_Sub Backend Server Start [PORT : " + process.env.SERVER_PORT + "]");
    console.log("Server : " + process.env.SERVER);
});
