const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");
const app = express();

mongoose.connect(
  "mongodb+srv://mapdevs:root2020@mapdevs-ae66v.mongodb.net/mapdevs?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  }
);

app.use(cors());
app.use(express.json());
app.use(routes);

//Porta da Aplicacao
app.listen(3003);
