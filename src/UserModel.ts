import mongoose from "./mongoose";

const Schema = mongoose.Schema;

/**
 * 创建一个文档约束
 */
export const UserSchema = new Schema({
    name: String,
    age: Number,
});

/**
 * 创建一个接口方便类型检查
 */
export interface IUser extends mongoose.Document {
    name: string;
    age: number;
}

/**
 * 创建一个模型对象
 *   同时传入了IUser这个泛型参数
 *   以后new User() 创建的document对象就可以做类型检查了
 */
const User = mongoose.model<IUser>("User", UserSchema);

export default User;

/**
 * 这里也可以看到ts的一个缺点
 *   ts的类型系统是编译阶段的，运行时的js是弱类型的
 *   导致需要同时声明Schema和interface，增加了重复工作
 */
