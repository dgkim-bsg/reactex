import jwt from "jsonwebtoken";
import dotenv from "dotenv"; //환경변수 가져오기
dotenv.config();

const userCookieCheckMiddleware = (ctx, next) => {
    const token = ctx.cookies.get("access_token");
    console.log("========================");
    console.log("userCookieCheckMiddleware > token");
    console.log(token);
    console.log("========================");
    if(!token){
        console.log("========================");
        console.log("토큰 없음...");
        console.log("========================");
        return next();  //토큰 없음
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        ctx.state.user = {
            _email: decoded._email
        }
        console.log("========================");
        console.log("토큰 검증 > decoded");
        console.log(ctx.state.user);
        console.log(decoded);
        console.log("========================");
        return next();
    } catch (e) {
        return next();  //토큰 검증 실패
    }
}

export default userCookieCheckMiddleware;