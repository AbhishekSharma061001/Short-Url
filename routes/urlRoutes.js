const express = require("express");
const { handleGenerateNewShortUrl, handleGenerateAnalytics } = require("../controllers/urlControllers");
const router = express.Router();

router.post("/", handleGenerateNewShortUrl);

router.get("/analytics/:shortId", handleGenerateAnalytics);

module.exports = router;