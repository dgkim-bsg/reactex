import Router from 'koa-router';
import myvoice from './myvoice';
import db from './db';

const api = new Router();

api.use('/myvoice', myvoice.routes());
api.use('/db', db.routes());

// 라우터를 내보냅니다.
export default api;
