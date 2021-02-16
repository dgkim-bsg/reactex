export const list = async (ctx) => {
    try {
        ctx.body = "db.list";
    } catch (e) {
        ctx.throw(500, e);
    }
};
