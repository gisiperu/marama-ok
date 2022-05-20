
function agregar(id) {
    let seleccion = tortas.find(e => e.id === id)
    carrito.push(seleccion)
    localStorage.setItem('carrito', JSON.stringify(carrito))
    return seleccion
}


let divTortas = document.getElementById('divTortas')
tortas.forEach(torta => {
    divTortas.innerHTML += `
        <div id = torta${torta.id}>
            <p class="nombres-items"> ${torta.nombre}</p>
            <p> ${torta.ingredientes}</p>
        </div>
        <button id="boton" onclick = "agregar(${torta.id})">Agregar al carrito</button>`
})
let boton = document.getElementById('boton')
tortas.forEach((torta, indice) => {
document.querySelector(`#boton${indice}`).addEventListener('click', () => {
    Toastify({
        text: "This is a toast",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
})


/*let boton1 = document.getElementById('tortas1')
    boton1.addEventListener('click'), (e) => {
        console.log(e)
}*/
let carrito = localStorage.getItem('Carrito') ?? []
/*[]
if (localStorage.getItem('Carrito')) { 
    carrito = JSON.parse(localStorage.getItem('Carrito'))    
} else { 
    localStorage.setItem('Carrito', JSON.stringify(carrito))
}*/


/*divTortas = document.querySelector('#divTortas')
tortas.forEach((torta, ${torta.id}) => {
    divTortas.innerHTML += `
    <torta${torta.id}`
})*/
/*tortas.forEach((e, indice) => {
    document.querySelector(`#boton${indice}`).addEventListener('click', () => {
        let productoCarrito = tortas`${torta.id}`
        carrito.push(productoCarrito)
        localStorage.setItem('carrito', JSON.stringify('carrito'))
    })
})*/
function mostrarCarrito() {
    carrito = JSON.parse(localStorage.getItem('carrito')) || []
    let divCarrito = document.getElementById('divCarrito')
    carrito.forEach(torta => {
        divCarrito.innerHTML += `
        <div id = torta${torta.id}>
            <p class="nombres-items"> ${torta.nombre}</p>
            <p> ${torta.ingredientes}</p>
            <p> ${torta.precio}</p>
        </div>`  
    })
}


