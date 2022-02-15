const express = require("express");
const cors = require("cors");
const app = express();

const port = 8080;
const models = require("./models");
const router = require("./routes/index");
const corsOpt = {
  origin: "http://localhost:3000",
  credentials: true,
};
app.use(express.json());
app.use(cors(corsOpt));

app.use(router);

app.listen(port, () => {
  console.log(`서버가 돌아갑니다`);
  models.sequelize
    .sync()
    .then(() => {
      console.log("DB연결성공");
    })
    .catch((err) => {
      console.log("DB연결실패", err);
      process.exit();
    });
});
