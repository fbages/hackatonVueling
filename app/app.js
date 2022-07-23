const express = require('express');
const errorHandler = require('./middlewares/errorHandler');
const validation = require('./middlewares/validator');
const http = require('http')
const app = express();
const server = http.createServer(app);
const routerProducts = require('./routes/routesProducts');
const routerServices = require('./routes/routesServices');

//DB config
const db = require('./config/config');

//Middlewares
//app.use(validation);
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Routes
 app.use(routerProducts);
 app.use(routerServices);

//Middleware ErrorHandler
app.use(errorHandler);

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is listening in port ${PORT}`)
})