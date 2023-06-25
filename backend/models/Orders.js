const mongoose = require("mongoose");
const { Schema } = mongoose;

const OrdersSchema = new Schema({
  email: {
    type: String,
    // required: true
  },
  order_data: {
    type: Array,
    required: true,
  },
});

const order = mongoose.model("order", OrdersSchema);
module.exports = order;
