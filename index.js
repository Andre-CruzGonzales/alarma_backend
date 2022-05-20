const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//conexion a la bd
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.dufss.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose
  .connect(uri, options)
  .then(() => console.log("Base de datos conectada"))
  .catch((e) => console.log("error db:", e));
//import routes
const authRoutes = require("./routes/auth");
//route middlewares
app.use("/api/user", authRoutes);

//iniciar el serve
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`server run in port ${PORT}`);
});
