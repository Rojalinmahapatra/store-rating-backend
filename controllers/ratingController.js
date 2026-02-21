const db = require("../config/db");

// RATE OR UPDATE STORE
exports.rateStore = (req, res) => {
  const { store_id, rating } = req.body;
  const user_id = req.user.id;

  if (!store_id || !rating) {
    return res.status(400).json({ message: "store_id and rating required" });
  }

  if (rating < 1 || rating > 5) {
    return res.status(400).json({ message: "Rating must be 1 to 5" });
  }

  const sql = `
    INSERT INTO ratings (user_id, store_id, rating)
    VALUES (?, ?, ?)
    ON DUPLICATE KEY UPDATE rating = ?
  `;

  db.query(sql, [user_id, store_id, rating, rating], (err) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    res.json({ message: "Rating submitted successfully" });
  });
};