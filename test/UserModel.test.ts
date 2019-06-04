import UserModel from "../src/UserModel";

describe("测试UserModel", () => {
    it("创建用户", async () => {
        const user = await UserModel.create({name: "Jon Snow"});

        // 正常创建后user中应给携带_id
        console.log(user.toJSON());
        expect(user._id).not.toBeNull();
    });

    it("查询一个用户",  (done) => {
        // 查询符合条件的第一个文档
        UserModel.findOne({name: "Jon Snow"}, ((err, user) => {
            if (err) {
                console.log(err);
                throw new Error(err.message);
            } else {
                if (user == null) {
                    throw new Error("没有查询到数据");
                } else {
                    console.log("查询的一个用户");
                    console.log(user.toJSON());
                    expect(user._id).not.toBeNull();
                    done();
                }
            }
        }));
    });

    it("查询一组用户", () => {
        // 查询用户信息
        UserModel.find({name: "Jon Snow"}, ((err, userList) => {
            if (err) {
                console.log(err);
                throw new Error(err.message);
            } else {
                if (userList == null) {
                    throw new Error("没有查询到数据");
                } else {
                    console.log("查询到用户列表");
                    expect(userList.length).toBeGreaterThanOrEqual(1);
                }
            }
        }));
    });
});
