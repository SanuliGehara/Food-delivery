import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://sanuligehara:20051207@cluster0.s8capwx.mongodb.net/Food-Delivery"
    )
    .then(() => console.log("DB connected"));
};
