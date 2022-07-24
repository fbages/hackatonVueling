const express = require('express');
const notfound404 = require('./middlewares/notfound404');
const http = require('http')
const app = express();
const server = http.createServer(app);
const routerProducts = require('./routes/routesProducts');
const routerServices = require('./routes/routesServices');

//DB config
const db = require('./config/config');

//Middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Routes
app.use(routerProducts);
app.use(routerServices);

//Middleware ErrorHandler
app.use(notfound404);

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is listening in port ${PORT}`)
})