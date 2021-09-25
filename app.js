const express = require("express");
const dotenv = require("dotenv");
const connectMongoDB = require("./databases/mongoDBCon");
const authRoutes = require("./routes/auth");
const listRoutes = require("./routes/list");

dotenv.config();
connectMongoDB();

const app = express();

// Middleware
app.use(express.json()); //parsing json
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api", authRoutes);
app.use("/api", listRoutes);

app.listen(process.env.PORT, () => console.log(`Backend server is listening`));
