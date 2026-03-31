const express = require("express");
const app = express();

const  dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT;
const cors=require("cors")
app.use(cors())
app.use(express.json());
const aiRouter = require("./routes/PromptRouter");
app.use("/api", aiRouter);
const aiTextRouter = require("./routes/multiModelRouter");
app.use("/api", aiTextRouter);

app.listen(port, () => {
  console.log(`server running on port ${port}!`);
});
