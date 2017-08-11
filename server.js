var express = require("express");
var path = require("path");

var app = express();
var port = 3000;

// para poder obtener archivos estatis dentro de dist y content
app.use("/dist", express.static(path.join(__dirname, 'dist')));
app.use("/content", express.static(path.join(__dirname, 'content')));



//aqui vamos a definir las rutas del servidor
///



// ruta por defecto, si no enconstraste con que responder, mandeme index.html
app.use((req, res) => {
    res.sendFile(path.join(__dirname, "./index.html"));
});

app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});