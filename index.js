const express = require('express');
const app = express();
const routes = require('./routes/taskRoutes.js');

const port = 3000;

// Cargamos el middleware de express.json() y urlencoded() para que pueda leer los datos de las peticiones en formato JSON
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Creamos constante dbConnection, que extrae del objeto dbConnection la propiedad (funcion) dbConnection
const {dbConnection} = require ('./config/config.js');

// Cargamos las rutas creadas en Task.js
app.use('/', routes);

dbConnection();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});