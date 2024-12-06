const express = require("express");

const indexRouter = require("./routes/index");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use("/", indexRouter);

module.exports = app;

// endpoints a considerar:
// para crear una nueva landing page generica
// para modificar css de landing page
// para modificar html de landing page
// para modificar js de landing page
// para agregar imagenes o assets a landing page
// para eliminar imagenes o assets a landing page

//! HABRIA QUE MODIFICAR LO DE SIMPLEGIT PARA QUE NO SE HAGA EN ESTA APP DE AUTOMATIZADOR, SINO EN LA CARPETA DE LANDING

//TODO: agregar la branch main a la carpeta eightroom, y siempre q se haga algo, hacer un pull de la branch main para quedar actualizada y tener la ultima version de una lp que se este trabajando.

//TODO: el endpoint put de la api idealmente recibe una o varias lineas de codigo, ya sea css o html, preferentemente que se reciba en body una clase o una etiqueta con clase (por ejemplo), buscaria que existan esas lineas en el archivo, si existen, se modifican, si no existen, se agregan.

//TODO: Lo que se deberia recibir de req por body seria =>
//TODO  houseName, cssContent, htmlContent, jsContent

//TODO: ver de agregar recursividad para buscar en las carpetas y encontrar todas las carpetas con nombre de casa de apuestas y meterlas en el array

//TODO: utilizar cheerio para modificar el html