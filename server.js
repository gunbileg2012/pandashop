const express = require("express");
const dotenv = require("dotenv");
var path = require("path");
var rfs = require("rotating-file-stream");
const connectDB = require("./config/db");
const colors = require("colors");
const errorHandler = require("./middleware/error");
var morgan = require("morgan");
const logger = require("./middleware/logger");
// Router оруулж ирэх
const productRoutes = require("./routes/product");
const categoriesRoutes = require("./routes/categories");
const productOptionRoutes = require("./routes/product_options");
const productOptionDataRoutes = require("./routes/product_options_data");
const cartRoutes = require("./routes/cart");
const invoiceRoutes = require("./routes/invoice");
// Аппын тохиргоог process.env рүү ачаалах
dotenv.config({ path: "./config/config.env" });

const app = express();

connectDB();

// create a write stream (in append mode)
var accessLogStream = rfs.createStream("access.log", {
  interval: "1d", // rotate daily
  path: path.join(__dirname, "log"),
});

// Body parser
app.use(express.json());
app.use(logger);
app.use(morgan("combined", { stream: accessLogStream }));
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/categories", categoriesRoutes);
app.use("/api/v1/product_options", productOptionRoutes);
app.use("/api/v1/product_options_data", productOptionDataRoutes);
app.use("/api/v1/cart", cartRoutes);
app.use("/api/v1/invoice", invoiceRoutes);
app.use(errorHandler);

const server = app.listen(
  process.env.PORT,
  console.log(`Express сэрвэр ${process.env.PORT} порт дээр аслаа... `.rainbow)
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Алдаа гарлаа : ${err.message}`.underline.red.bold);
  server.close(() => {
    process.exit(1);
  });
});
