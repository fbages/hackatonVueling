const express = require('express');
const notfound404 = require('./src/middlewares/notfound404');
const http = require('http');
const path = require('path');
const app = express();
const server = http.createServer(app);
const routerProducts = require('./src/routes/routesProducts');
const routerUsers = require('./src/routes/routesUsers');

//DB config
const db = require('./src/config/config');

//Middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Routes
app.use(routerProducts);
app.use(routerUsers);

app.use('/', express.static(path.join(__dirname, 'public')))

//Middleware ErrorHandler
app.use(notfound404);

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is listening in port ${PORT}`)
})