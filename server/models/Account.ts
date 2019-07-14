import mongoose, { Schema, Document } from "mongoose";

interface IAccount extends Document {
  id: string;
  pw: string;
  role: ERole;
}

enum ERole {
  Admin,
  User
}

const Account: Schema = new Schema({
  id: String,
  pw: String,
  role: { type: String, enum: ["Admin", "User"], default: "User" }
});

export default mongoose.model<IAccount>("Account", Account);
