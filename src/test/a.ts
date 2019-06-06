import mongoose from "mongoose";

const url = "mongodb://localhost:27017/mongoose_impl";
mongoose.connect(url);

mongoose.connection.once("open", () => {
    console.log("数据库连接成功...");
});

console.log("aaa");

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
