import mongoose from "../src/mongoose";

describe("测试是否可以成功连接", () => {
    it("连接数据库", () => {
        console.log(mongoose.connection.states);
    });
});
