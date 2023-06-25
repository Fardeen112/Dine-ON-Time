const express = require("express");
const router = express.Router();
const food_items = require("../models/food_items");
const Food_Category = require("../models/Food_Category");
router.post("/foodData", async (req, res) => {
  try {
    const food_Data = await food_items.find({});
    const food_categories = await Food_Category.find({});
    res.send([food_Data, food_categories]);
    // res.json(food_categories);
  } catch (error) {
    console.error(error.message);
    res.send("server error");
  }
});
// router.post('/foodCat',async (req,res)=>{
//     try {
//         // const food_Data = await food_items.find({});
//         const food_categories = await Food_Category.find({});
//         // res.send(food_Data);
//         res.json(food_categories);
//     } catch (error) {
//         console.error(error.message);
//         res.send("server error")
//     }
// })

module.exports = router;
