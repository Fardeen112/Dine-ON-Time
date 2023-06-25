const express = require("express");
const app = express();
const port = 5000;
const mongoDB = require("./db");
const cors = require("cors");

mongoDB();
app.use(cors());
app.use(express.json());
app.use("/api", require("./Routes/CreateUser"));
app.use("/api", require("./Routes/DisplayData"));
app.use("/api", require("./Routes/OrderData"));

app.get("*", (_,res)  => {
  res.send("Server running...");
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
