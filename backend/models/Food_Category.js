const mongoose = require("mongoose");

const { schema } = mongoose;

const food_category_schema = new mongoose.Schema({
  CategoryName: String,
});

const food_category = mongoose.model("food_category", food_category_schema);
// const cat1= new food_category(
//     {
//         "CategoryName": "Biryani/Rice"
//     }
// )
// cat1.save();
module.exports = food_category;
