const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://fardeenhussain112:Fardeen112@dot.8vpv05e.mongodb.net/DOT?retryWrites=true&w=majority";
const mongoDB = () => {
  mongoose.connect(mongoURI).then(async () => {
    console.log("sucessful");
  });
};

module.exports = mongoDB;
