import mongoose from "mongoose";

const { Schema } = mongoose;

const PostSchema = new Schema({
    title: String,
    body: String,
    tags: [String], //배열 스트링
    publishedDate: {
        type: Date,
        default: Date.now, //현재 날짜 기본값
    },
});

const Post = mongoose.model("post", PostSchema);
export default Post;
