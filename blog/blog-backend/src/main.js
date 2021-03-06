require("dotenv").config();
import Koa from "koa";
import Router from "koa-router";
import bodyParser from "koa-bodyparser";
import mongoose from "mongoose";
import api from "./api";
import jwtMiddleware from "./lib/jwtMiddleware";

import createFakeData from "./createFakeData";

//비구조화 할당을 통해 process.env 내부값에 대한 래퍼런스 만들기
const { PORT, MONGO_URI } = process.env;
mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useFindAndModify: false })
    .then(() => {
        console.log("connected to MongoDB");
    })
    .catch((e) => {
        console.error(e);
    });

console.log(PORT);

const app = new Koa();
const router = new Router();

// 라우터 설정
router.use("/api", api.routes()); // api 라우트 적용

app.use(bodyParser());

app.use(jwtMiddleware);

// app 인스턴스에 라우터 적용함
app.use(router.routes()).use(router.allowedMethods());

const port = PORT || 4000;
app.listen(port, () => {
    console.log("listening to port " + port);
});
