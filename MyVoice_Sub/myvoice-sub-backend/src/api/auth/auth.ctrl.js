import { setCookie } from "../../util/userCookie";

export const userInfo = (ctx) => {
    //const email = ctx.query.email;
    const email = "dgkim@bsgglobal.com";
    ctx.body = {
        user_email: email,
        user_name: "김동건",
        user_name_en: "",
        user_img_url:
            "https://lh5.googleusercontent.com/-m7rVB4V35jY/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucm8nV52aOWNZkq5i8PwHQbbQF-eiw/s96-c/photo.jpg",
    };
    setCookie(ctx, email);  //쿠키 저장
};
