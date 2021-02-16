const checkLoggedIn = (ctx, next) => {
    console.log("========================");
    console.log("checkLoggedIn");
    console.log(ctx.state.user);
    console.log("========================");
    if (!ctx.state.user) {
        ctx.status = 401;
        return;
    }
    return next();
};

export default checkLoggedIn;
