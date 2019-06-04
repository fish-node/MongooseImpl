import mongoose from "./mongoose";

const Schema = mongoose.Schema;

// 创建一个文档约束
const UserSchema = new Schema({
    name: String,
    age: Number,
    sons: {
        type: String,
        default: "female",
    },
});

export default UserSchema;
