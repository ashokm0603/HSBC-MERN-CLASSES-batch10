const express = require("express");

const connection = require("./config/db");
const app = express();
const env = require("dotenv");
const cors = require("cors");
app.use(cors());
env.config();
app.use(express.json());
const port = process.env.PORT;
connection();
const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
app.use("/api", userRoute);
app.use("/api", productRoute);
app.listen(port, () => {
  console.log("Server running on port : ", port);
});
