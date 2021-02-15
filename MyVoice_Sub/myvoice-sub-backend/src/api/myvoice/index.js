import Router from 'koa-router';
import * as myvoiceCtrl from './myvoice.ctrl';

const myvoice = new Router();

myvoice.get('/userInfo', myvoiceCtrl.userInfo);

export default myvoice;
