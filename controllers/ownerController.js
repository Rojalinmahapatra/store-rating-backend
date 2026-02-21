const db = require("../config/db");

exports.getOwnerRatings = (req, res) => {
  const ownerId = req.user.id;

  const query = `
    SELECT s.name AS store_name,
           AVG(r.rating) AS average_rating
    FROM stores s
    LEFT JOIN ratings r ON s.id = r.store_id
    WHERE s.owner_id = ?
    GROUP BY s.id
  `;

  db.query(query, [ownerId], (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Database error" });
    }
    res.json(results);
  });
};