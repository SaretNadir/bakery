var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');

//api references
var categories = require('./api/categories');
var products = require('./api/products');
var sizes = require ('./api/sizes');

var app = express();
var port = process.env.PORT || 3000;


app.use(bodyParser.json());

// para poder obtener archivos estatis dentro de dist y content
app.use("/dist", express.static(path.join(__dirname, 'dist')));
app.use("/content", express.static(path.join(__dirname, 'content')));



//aqui vamos a definir las rutas del servidor
app.use(categories);
app.use(products);
app.use(sizes);



// ruta por defecto, si no enconstraste con que responder, mandeme index.html
app.get("*", function (req, res, next) {
    if (req.url.startsWith("/api/")) return next();
    res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});
