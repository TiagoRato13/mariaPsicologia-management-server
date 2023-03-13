// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config();

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

// 👇 Start handling routes here
const indexRoutes = require("./routes/index.routes");
app.use("/api", indexRoutes);

const bookRoutes = require("./routes/book.routes");
app.use("/api", bookRoutes);

const aboutRoutes = require("./routes/about.routes");
app.use("/api", aboutRoutes);

const therapyRoutes = require("./routes/therapy.routes");
app.use("/api", therapyRoutes);

const contactsRoutes = require("./routes/contact.routes");
app.use("/api", contactsRoutes);

const monthlySubjectRoutes = require("./routes/monthly-subject.routes");
app.use("/api", monthlySubjectRoutes);

const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
