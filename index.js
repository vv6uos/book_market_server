const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");

const port = process.env.PORT || 8080;
const models = require("./models");
const router = require("./routes/index");
dotenv.config();
const prod = process.env.NODE_ENV === "production";
const whiteList = ["https://takeoutbook.kr", "http://localhost:3000"];

// origin: function (origin, cb) {
//   if (whiteList.indexOf(origin) !== -1) {
//     cb(null, true);
//   } else {
//     cb(new Error("NOT Allowed ORIGIN"));
//   }
// },
const corsOpt = {
  origin: "https://takeoutbook.kr",
  credentials: true,
};
app.set("trust proxy", 1);
app.use(express.json());
app.use(cors(corsOpt));

app.use(router);

app.listen(port, () => {
  console.log(
    `.................>>[배포단계?  `,
    prod,
    "]",
    process.env.TBO_CLIENT_URL,
    ":  SERVER START..........................."
  );
  models.sequelize
    .sync()
    .then(() => {
      console.log(".............DB연결성공.................");
    })
    .catch((err) => {
      console.log("DB연결실패", err);
      process.exit();
    });
});
