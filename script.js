function agregar(id) {
let seleccion = tortas.find(e => e.id === id)
return seleccion
}

let carrito = []
for(let i = 0; i < 5; i++) {
    agregar(Number(prompt("Elija un número entre 1 y 17"))) 
    console.log(carrito.push(agregar))   
}

let precioTotal = carrito.reduce((a, b) => a + b.precioChica, 0)
console.log(precioTotal)

