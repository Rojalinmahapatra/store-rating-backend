const express = require("express");
const router = express.Router();
const db = require("../config/db");

// GET all stores
router.get("/stores", (req, res) => {
  db.query("SELECT id, name, address FROM stores", (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Database error" });
    }
    res.json(results);
  });
});

module.exports = router;