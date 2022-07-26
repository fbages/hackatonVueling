const mongoose = require("mongoose");
const productSchema = require("../models/modelProduct");
const userSchema = require("../models/modelUser");

let db = {};

  initialize();

  async function initialize() {
    //const { host, port, databaseName } = config.dbmongo;
    await mongoose.connect("mongodb://" + "localhost" + ":" + "27017" + "/" + "hackatonPrevi_FBages");
    console.log("Conected to MongoDB database");

    db.products = mongoose.model("products", productSchema);
    db.users = mongoose.model("users", userSchema);
  }

  module.exports = db;
  