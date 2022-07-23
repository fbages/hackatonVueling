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
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Routes
 app.use(routerProducts);
 app.use(routerServices);

//Middleware ErrorHandler
app.use(errorHandler);

app.use(function(req, res, next) {
    res.status(404);
   // respond with json
   if (req.accepts('json')) {
    res.json({ error: 'Page not found' });
    return;
  }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is listening in port ${PORT}`)
})