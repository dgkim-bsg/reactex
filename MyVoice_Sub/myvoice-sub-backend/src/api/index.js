import Router from 'koa-router';
import checkLoggedIn from "../util/checkLoggedIn";
import auth from './auth';
import myvoice from './myvoice';
import db from './db';

const api = new Router();

api.use('/auth', auth.routes());
api.use('/myvoice', checkLoggedIn, myvoice.routes());
api.use('/db', checkLoggedIn, db.routes());

// 라우터를 내보냅니다.
export default api;
