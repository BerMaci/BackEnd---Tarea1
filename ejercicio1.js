const express = require('express')
const app = express()
const port = 3000

app.get("/saludar/:nombre", (req,res) =>{
res.send("Hola, Buenos días " + req.params.nombre )
})

app.listen(port, () => {
  console.log(`Ejercicio1`)
})