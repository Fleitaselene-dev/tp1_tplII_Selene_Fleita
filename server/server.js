import express from "express"
import morgan from "morgan"

const app = express()
const Port = 5000

app.use(express.json())
app.use(morgan("dev"))
app.use(express.static("client"));

app.get('/saludo/:nombre', (req, res) => {
    const nombre = req.params.nombre;
    res.send(`Hola, ${nombre}!`);
    });

app.listen(Port, ()=>{
    console.log(`Servidor corriendo en http://localhost:${Port}`)
})