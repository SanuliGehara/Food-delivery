import mongoose from "mongoose";

export const connectDB = async () => {
  // replace with your database connection link
  await mongoose.connect("#").then(() => console.log("DB connected"));
};
