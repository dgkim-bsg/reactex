import Koa from "koa";
import Router from "koa-router";
import bodyParser from "koa-bodyparser";
import mongoose from "mongoose";
const app = new Koa();

app.use((ctx) => {
    ctx.body = "hello world";
});

app.use(bodyParser());

app.listen(4000, () => {
    console.log("sddddd111d");
});
