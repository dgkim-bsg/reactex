export const list = async (ctx) => {
    try {
        return "111";
    } catch (e) {
        ctx.throw(500, e);
    }
};
