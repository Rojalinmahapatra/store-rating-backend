const express = require("express");
const router = express.Router();

const ownerController = require("../controllers/ownerController");
const { verifyToken } = require("../middleware/authMiddleware");

router.get("/owner/ratings", verifyToken, ownerController.getOwnerRatings);

module.exports = router;