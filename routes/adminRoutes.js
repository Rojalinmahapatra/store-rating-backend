const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const { verifyToken } = require("../middleware/authMiddleware");

// Admin dashboard stats
router.get("/admin/dashboard", verifyToken, adminController.getDashboardStats);

module.exports = router;