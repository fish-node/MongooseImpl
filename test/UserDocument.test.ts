import UserModel from "../src/UserModel";

describe("测试UserDocument", () => {
    it("通过UserDocument创建用户", (done) => {
        const userDocument = new UserModel({
            name: "Jack",
        });
        userDocument.save((err) => {
            if (err != null) {
                throw new Error("出错了");
            }
            console.log(userDocument);
            expect(userDocument._id).not.toBeNull();
            done();
        });
    });
});
