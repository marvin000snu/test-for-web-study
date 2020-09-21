const express = require("express")
const router = express.Router()
const {scrapNews} = require("../controller/scrap-controller")
router.post("/scrap",scrapNews)

module.exports= router;  