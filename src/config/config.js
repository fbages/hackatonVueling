const mongoose = require("mongoose");
const productSchema = require("../models/modelProduct");
const userSchema = require("../models/modelUser");

let db = {};

  initialize();

  async function initialize() {
    //const { host, port, databaseName } = config.dbmongo;
//    await mongoose.connect("mongodb://" + "localhost" + ":" + "27017" + "/" + "hackatonPrevi_FBages");
    await mongoose.connect("mongodb+srv://AndreTruss:bpbUGW0U6Gxl8kOE@cluster0.lnihe.mongodb.net/hackaton2?retryWrites=true&w=majority");
    console.log("Conected to MongoDB database");

    db.products = mongoose.model("products", productSchema);
    db.users = mongoose.model("users", userSchema);
    // db.products.insertMany([{
    //   "productId": 0,
    //   "brand": "Decathlon",
    //   "category": "Zapatillas",
    //   "description": "\"Zapatillas para amateur",
    //   "image": "https://contents.mediadecathlon.com/p2155651/k$81fc073b39ce6c1402394f10a36c303b/sq/zapatillas-running-hombre-asics-gel-windhawk-azul-blanco.jpg?format=auto&f=650x650",
    //   "price": 98.9,
    //   "title": "Zapatillas runner D1000"
    // },{
    //   "productId": 1,
    //   "brand": "Decathlon",
    //   "category": "Zapatillas",
    //   "description": "\"Zapatillas para profesional",
    //   "image": "https://www.decathlon.es/es/p/zapatillas-running-asics-gel-glyde-3-hombre-negro-amarillo/_/R-p-339930?mc=8757275",
    //   "price": 158.49,
    //   "title": "Zapatillas runner D2000"
    // }])

    // db.users.insertMany(
    //   [{
    //     "age": 23,
    //     "country": "EEUU",
    //     "mail": "marcsmith@hotmail.com",
    //     "recommendation": [
    //       {
    //         "recommendationId": 0,
    //         "text": "My recomendation ....",
    //         "likeCount": 23,
    //         "productId": 1,
    //         "reviewsAvg": 4.2,
    //         "tags": [
    //           "Zapatillas",
    //           "Runners"
    //         ],
    //         "created": {
    //           "$date": {
    //             "$numberLong": "980982000000"
    //           }
    //         },
    //         "originalreviewURL": "endpoint producte",
    //         "image": "sdafds",
    //         "rewards": "125"
    //       }
    //     ],
    //     "sex": "male",
    //     "userId": 0,
    //     "comments": [
    //       {
    //         "recommendationId": 1,
    //         "productId":0,
    //         "commentId": 0,
    //         "text": "Me ha gustado mucho este producto",
    //         "like": "1",
    //         "rewards": "8"
    //       }
    //     ]
    //   },{
    //     "age": 33,
    //     "country": "France",
    //     "mail": "ellensmith@hotmail.com",
    //     "recommendation": [
    //       {
    //         "recommendationId": 1,
    //         "text": "My recomendation ....",
    //         "likeCount": 5,
    //         "productId": 1,
    //         "reviewsAvg": 3,
    //         "tags": [
    //           "Zapatillas",
    //           "Runners"
    //         ],
    //         "created": {
    //           "$date": {
    //             "$numberLong": "980982000000"
    //           }
    //         },
    //         "originalreviewURL": "endpoint producte",
    //         "image": "sdafds",
    //         "rewards": "75"
    //       }
    //     ],
    //     "sex": "female",
    //     "userId": 1,
    //     "comments": [
    //       {
    //         "recommendationId": 0,
    //         "commentId": 0,
    //         "text": "Me van perfectas",
    //         "like": "1",
    //         "rewards": "5"
    //       }
    //     ]
    //   }]
    // )
  }

  module.exports = db;
  