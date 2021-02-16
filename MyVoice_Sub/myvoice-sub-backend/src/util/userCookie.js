import jwt from "jsonwebtoken";
import dotenv from "dotenv"; //환경변수 가져오기
dotenv.config();

const generateToken = (email) => {
    const token = jwt.sign(
        {_email : email},
        process.env.JWT_SECRET,
        {expiresIn:"60s"}   //1분
    )
    return token;
};

export const setCookie = (ctx, email) => {
    const token = generateToken(email);
    console.log("========================");
    console.log("setCookie");
    console.log(token);
    console.log("========================");
    ctx.cookies.set("access_token", token, {
        maxAge: 1000 * 60 * 1,  //1분
        httpOnly:true
    });
}