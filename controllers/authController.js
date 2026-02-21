const db = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// SIGNUP (NORMAL USER)
exports.signup = async (req, res) => {
  const { name, email, password, address } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    db.query(
      "INSERT INTO users (name, email, password, address, role) VALUES (?, ?, ?, ?, 'USER')",
      [name, email, hashedPassword, address],
      (err) => {
        if (err) {
          return res.status(400).json({ message: err.message });
        }
        res.json({ message: "Signup successful" });
      }
    );
  } catch {
    res.status(500).json({ message: "Signup error" });
  }
};

// LOGIN (ALL ROLES)
exports.login = (req, res) => {
  const { email, password } = req.body;

  db.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    async (err, results) => {
      if (err || results.length === 0) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      const user = results[0];
      const match = await bcrypt.compare(password, user.password);

      if (!match) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      const token = jwt.sign(
        { id: user.id, role: user.role },
        "SECRET_KEY",
        { expiresIn: "1d" }
      );

      res.json({ token, role: user.role });
    }
  );
};