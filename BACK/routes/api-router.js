const express = require("express");
const router = express.Router();
const loginRouter = require('./login-router.js')
const scrapRouter = require('./scrap-router.js')

router.use("/login",loginRouter)
router.use("/scrap",scrapRouter )

module.exports = router;
