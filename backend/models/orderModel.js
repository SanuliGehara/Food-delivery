import mongoose from "mongoose";

const orderShema = new mongoose.Schema({
  userId: { type: String, required: true },
  items: { type: Array, required: true },
  amount: { type: Number, required: true },
  address: { type: Object, required: true },
  status: { type: String, default: "Food Processing" },
  date: { type: Date, default: Date.now() },
  payement: { type: Boolean, default: false },
});

// Create Order Model
const orderModel = mongoose.models.order || mongoose.model("order", orderShema);

export default orderModel;
