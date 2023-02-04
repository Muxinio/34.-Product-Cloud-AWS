const express = require('express');
const app = express();

app.get('/users', (req, res) => {
    res.send({ mensaje: `Aqui los users` });
});
app.get('/',(req,res)=>{
    res.send({ mensaje:`Conexion exitosa con el Servidor!!`});
});

app.set("port", process.env.PORT || 8080);
app.listen(app.get("port"), () => {
    console.log("Online" + app.get("port"))
});
