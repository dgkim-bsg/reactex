export const list = async (ctx) => {
    try {
        ctx.body = "myvoice.list";
    } catch (e) {
        ctx.throw(500, e);
    }
};
