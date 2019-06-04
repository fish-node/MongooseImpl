import mongoose from "./mongoose";
import UserSchema from "./UserSchema";

// 创建一个collection
const User = mongoose.model("User", UserSchema);

export default User;
