import Post from "../../models/post";
import mongoose from "mongoose";
import Joi from "joi";

const { ObjectId } = mongoose.Types;

export const getPostById = async (ctx, next) => {
    const { id } = ctx.params;
    if (!ObjectId.isValid(id)) {
        ctx.status = 400;
        return;
    }
    try {
        const post = await Post.findById("id");

        if (!post) {
            ctx.status = 404;
            return;
        }
        ctx.state.post = post;
        return next();
    }
    return next();
};

// 로그이 사용자가 작성한 포스트인지 확인
export const checkOwnPost = (ctx, next) => {
    const { user, post } = ctx.state;
    if (post.user._id.toString() !== user._id) {
        // mongoDB에서 조회한 값을 문자열과 비교할 때는 반드시 toString()을 해주어야 함
        ctx.status = 403;
        return;
    }
    return next();
};

export const write = async (ctx) => {
    const schema = Joi.object().keys({
        title: Joi.string().required(),
        body: Joi.string().required(),
        tags: Joi.array().items(Joi.string()).required(), //문자열로 이루어진 배열
    });

    // 검증실패인 경우 에러처리
    const result = schema.validate(ctx.request.body);
    if (result.error) {
        ctx.status = 400;
        ctx.body = result.error;
        return;
    }

    const { title, body, tags } = ctx.request.body;
    const post = new Post({
        title,
        body,
        tags,
        user: ctx.state.user,
    });
    try {
        await post.save();
        ctx.body = post;
    } catch (e) {
        ctx.throw(500, e);
    }
};

export const list = async (ctx) => {
    const page = parseInt(ctx.query.page || "1", 10); //두번째 파라미터는 진수를 표현함 (10=10진수)
    if (page < 1) {
        ctx.status = 400;
        return;
    }

    const { tag, username } = ctx.query;
    // tag, username 값이 유효하면 객체 안에 넣고, 그렇지 않으면 넣지 않음
    const query = {
        ...(username ? { "user.username": username } : {}),
        ...(tag ? { tags: tag } : {}),
    };
    try {
        // sort : 1 = 오름차순(이전글부터) / 2 = 내림차순(최신글부터)
        // limit : 가져올 데이터 개수
        // skip : 10 = 처음 10개를 제외하고 그 다음 데이터를 가져옴
        const posts = await Post.find()
            .sort({ _id: -1 })
            .limit(10)
            .skip((page - 1) * 10)
            .lean() //JSON으로 변환
            .exec();
        const postCount = await Post.countDocuments().exec(); //전체 카운트 가져오기

        ctx.set("Last-Page", Math.ceil(postCount / 10)); //전체 카운트 페이지 계산을 위한 커스텀 HTTP 헤더 설정 (전체 페이지 수 넣기)

        ctx.body = posts.map((post) => ({
            ...post,
            body:
                post.body.length < 200
                    ? post.body
                    : `${post.body.slice(0, 200)}...`,
        })); // 200자 이상이면 200자 이후부터 ...로 치환
    } catch (e) {
        ctx.throw(500, e);
    }
};

export const read = async (ctx) => {
    ctx.body = ctx.state.post;
};

export const remove = async (ctx) => {
    const { id } = ctx.params;
    try {
        await Post.findByIdAndRemove(id).exec();
        ctx.status = 204;
    } catch (e) {
        ctx.throw(500, e);
    }
};

export const update = async (ctx) => {
    const { id } = ctx.params;
    // write 에서 사용한 schema 와 비슷한데, required() 가 없습니다.
    const schema = Joi.object().keys({
        title: Joi.string(),
        body: Joi.string(),
        tags: Joi.array().items(Joi.string()),
    });

    // 검증 후, 검증 실패시 에러처리
    const result = schema.validate(ctx.request.body);
    if (result.error) {
        ctx.status = 400; // Bad Request
        ctx.body = result.error;
        return;
    }
    try {
        const post = await Post.findByIdAndUpdate(id, ctx.request.body, {
            new: true, //true:업데이트된 데이터를 반환함 / false:업데이트되기 전 데이터를 반환함
        }).exec();
        if (!post) {
            ctx.status = 404;
            return;
        }
        ctx.body = post;
    } catch (e) {
        ctx.throw(500, e);
    }
};
