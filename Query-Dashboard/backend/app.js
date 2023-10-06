const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./Routes/crudRoutes");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

///////////////////////////////////////////////

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

////DB CONNECTION

mongoose
  .connect(
    `mongodb+srv://sree:sreevarshan@cluster0.lqh5ii3.mongodb.net/queries`
  )
  .then((con) => {
    console.log("DB Connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api", router);

app.listen(port, () => {
  console.log(`App Running on port ${port}`);
});
