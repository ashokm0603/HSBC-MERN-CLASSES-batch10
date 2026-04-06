const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors=require("cors")
app.use(cors())
const env = require("dotenv");
env.config();
const port = process.env.PORT;
const connection = require("./config/db");
connection();
app.use(express.json());
app.use(cookieParser());

const authRoute = require("./routes/AuthRoute");

app.use("/api/auth", authRoute);

app.listen(port, () => {
  console.log(`Server  listening on port ${port}!`);
});
