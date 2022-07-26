const mongoose = require("mongoose");
const productSchema = require("../models/modelProduct");
const serviceSchema = require("../models/modelService");

let db = {};

  initialize();

  async function initialize() {
    //const { host, port, databaseName } = config.dbmongo;
//    await mongoose.connect("mongodb://" + "localhost" + ":" + "27017" + "/" + "hackatonPrevi_FBages");
    await mongoose.connect("mongodb+srv://AndreTruss:bpbUGW0U6Gxl8kOE@cluster0.lnihe.mongodb.net/hackaton?retryWrites=true&w=majority");
    console.log("Conected to MongoDB database");

    db.products = mongoose.model("products", productSchema);
    db.services = mongoose.model("services", serviceSchema);
  }

  module.exports = db;
  