const storeRoutes = require("./routes/storeRoutes");
const ownerRoutes = require("./routes/ownerRoutes");
const adminRoutes = require("./routes/adminRoutes");
const express = require("express");
const cors = require("cors");

require("./config/db");

const authRoutes = require("./routes/authRoutes");
const ratingRoutes = require("./routes/ratingRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api", ratingRoutes);
app.use("/api", adminRoutes);
app.use("/api", ownerRoutes);
app.use("/api", storeRoutes);
app.use("/api/admin", adminRoutes);

app.get("/", (req, res) => {
  res.send("Store Rating API Running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});