import Router from 'koa-router';
import * as dbCtrl from './db.ctrl';

const db = new Router();

db.get('/', dbCtrl.list);

export default db;
