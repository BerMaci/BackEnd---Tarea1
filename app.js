
const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.send('Backend - BertaMacina -Tarea 1 de node y express')
})


app.listen(port, () => {
  console.log(`App escuchando}`)
})


// 1 ruta con query que me devuelva un objeto persona con nombre, edad, altura, nacionalidad.

//http://localhost:3000/usuario?nombre=Liliana&apellido=Lopez&edad=25&altura=160&nacionalidad=argentina
app.get('/usuario', (req, res) => {
    let nombre = req.query.nombre;
    let apellido = req.query.apellido;
    let edad = req.query.edad;
    let altura = req.query.altura;
    let nacionalidad = req.query.nacionalidad;
    console.log(req.query);
    res.status(200).send(` Mi nombre es:${nombre} ${apellido} , tengo ${edad} años, mido ${altura} m y soy ${nacionalidad}`);
})



// 2 ruta que sume números.
app.get('/suma/:param1/:param2', (req, res) => {
    let num1 = Number(req.params.param1);  //si le retirars Number te concatena como strings
    let num2 = Number(req.params.param2);
    let resultado = num1 + num2;
    res.json(resultado);
    console.log(req.params, resultado);
    console.log(num1, num2);


});

// 3 Método Number ejemplo ( let num1= Number(req.params.num1) esto hará que el parametro pase de formato string a number.
// producto de dos números, si uno de los números es cero decir que no se puede hacer el producto (uso de params).
app.get('/producto/:param1/:param2', (req, res) => {
    let num1 = Number(req.params.param1);
    let num2 = Number(req.params.param2);
    if (num1 == 0 || num2 == 0){
        res.status(400).send("El número no puede ser igual a cero para hacer el producto");
    } else {
        let producto = num1 * num2;
        res.json(producto);
        console.log(req.params, producto);
        console.log(num1, num2);
    }
});








