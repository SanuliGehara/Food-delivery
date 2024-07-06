import mongoose from "mongoose";

// Define properties for user Model
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cartData: { type: Object, default: {} },
  },
  { minimize: false }
);

// Create a user Model
const userModel = mongoose.models.user || mongoose.model("user", userSchema);
export default userModel;
