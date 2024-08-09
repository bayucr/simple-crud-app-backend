const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/product.route.js");
const app = express();

app.use(express.json()); //middleware using json
app.use(express.urlencoded({ extended: false })); //middleware using Urlencoded
app.use("/api/products", router); //routes

// Menampilkan halaman utama
app.get("/", (req, res) => {
  res.send("Hello From Node API Tutorial Video");
});

// Menghubungkan ke MongoDB
mongoose
  .connect(
    "mongodb://bayfore:dUB5J1e8HthkvUu8@ac-gjitdeg-shard-00-00.ggkqlkb.mongodb.net:27017,ac-gjitdeg-shard-00-01.ggkqlkb.mongodb.net:27017,ac-gjitdeg-shard-00-02.ggkqlkb.mongodb.net:27017/Node-API?ssl=true&replicaSet=atlas-ymercv-shard-0&authSource=admin&retryWrites=true&w=majority&appName=BackEnd"
  )
  .then(() => {
    console.log("Connected!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.log("Not Connected!", err);
  });
