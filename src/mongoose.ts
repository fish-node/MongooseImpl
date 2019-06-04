import mongoose from "mongoose";

const url = "mongodb://localhost:27017/mongoose_impl";
mongoose.connect(url);

mongoose.connection.once("open", () => {
    console.log("数据库连接成功...");
});

mongoose.connection.once("close", () => {
    console.log("断开了连接");
});

export default mongoose;
