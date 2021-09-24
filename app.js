const express = require("express");
const dotenv = require("dotenv");
const connectMongoDB = require("./databases/mongoDBCon");
const authRoutes = require("./routes/authRoutes");

dotenv.config();
connectMongoDB();

const app = express();

// Middleware
app.use(express.json()); //parsing json
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api", authRoutes);

app.listen(process.env.PORT, () => console.log(`Backend server is listening`));
