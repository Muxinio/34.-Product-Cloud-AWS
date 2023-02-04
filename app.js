const express = require('express');
const app = express();



app.get('/users', (req, res) => {
    res.send({ mensaje: `Aqui los users` });
})

app.set("port", process.env.PORT || 8080);
app.listen(app.get("port"), () => {
    console.log("Server Running in Port " + app.get("port"))
});