const db = require("../config/db");

exports.getDashboardStats = (req, res) => {
  const stats = {};

  db.query("SELECT COUNT(*) AS users FROM users", (err, userResult) => {
    if (err) return res.status(500).json(err);
    stats.users = userResult[0].users;

    db.query("SELECT COUNT(*) AS stores FROM stores", (err, storeResult) => {
      if (err) return res.status(500).json(err);
      stats.stores = storeResult[0].stores;

      db.query("SELECT COUNT(*) AS ratings FROM ratings", (err, ratingResult) => {
        if (err) return res.status(500).json(err);
        stats.ratings = ratingResult[0].ratings;

        res.json(stats);
      });
    });
  });
};