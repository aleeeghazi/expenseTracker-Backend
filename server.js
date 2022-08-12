const express = require("express");
const connectDB = require("./config/db");
const { errorHandler } = require("./middlewares/error");
const cors = require("cors");
require("dotenv").config();
const authRoute = require("./routes/auth")
const incomeRoute = require("./routes/incomeRoute")
const expenseRoute = require("./routes/expenseRoute")
const categoryRoute = require("./routes/categoryRoute")
const loanRoute = require("./routes/loanRoute")

const morgan = require('morgan');

connectDB();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(morgan('tiny'));

app.use("/api/auth", authRoute);
app.use("/api/loan", loanRoute);
app.use("/api/income", incomeRoute);
app.use("/api/expense", expenseRoute);
app.use("/api/category", categoryRoute);

app.use(errorHandler);

const server = app.listen(PORT, () =>
  console.log(`Server started listening on ${PORT}`)
);

process.on("unhandledRejection", (error, promise) => {
  console.log(`Logged Error: ${error}`);
  server.close(() => process.exit(1));
});
