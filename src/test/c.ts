import mongoose from "mongoose";

// 创建一个文档约束
const UserSchema = new mongoose.Schema({
    name: String,
    age: Number,
});

const User = mongoose.model("User", UserSchema);

User.create({}).then((res) => {
    console.log("创建成功");
}).catch((err) => {
    console.log("发生异常");
});

console.log("aaa");
