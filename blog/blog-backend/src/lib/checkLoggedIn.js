// 현재 로그인 했는지 여부 검사
const checkLoggedIn = (ctx, next) => {
    if (!ctx.state.user) {
        ctx.status = 401;
        return;
    }
    return next();
};

export default checkLoggedIn;
