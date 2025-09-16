import express from "express";
import productsRoutes from "./routes/products/index";

const PORT = 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

// products endpoints

app.use("/products", productsRoutes);

app.listen(PORT, () => {
  console.log(`Ecommerce app listening on http://localhost:${PORT}`);
});
