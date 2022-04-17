const express = require("express");
const router = express.Router();

const test = require("./test.js");

const books = require("./books");
const register = require("./register.js");
const loginSession = require("./loginSession");
const member = require("./member.js");
const bestsellers = require("./bestsellers");
const userBooks = require("./userBooks");

router.use("/books", books);
router.use("/userBooks", userBooks);
router.use("/register", register);
router.use("/member", member);
router.use("/bestsellers", bestsellers);
router.use("/loginSession", loginSession);
router.use("/test", test);

module.exports = router;
