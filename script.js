function agregar(id) {
    let seleccion = tortas.find(e => e.id === id)
    carrito.push(seleccion)
    localStorage.setItem('carrito', JSON.stringify(carrito))
    Toastify({
        text: "La torta seleccionada fue agregada con éxito!",
        duration: 1200,
        //destination: "https://github.com/apvarun/toastify-js",
        newWindow: false,
        close: false,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: false, // Prevents dismissing of toast on hover
        style: {
        background: "linear-gradient(to right, rgb(212, 34, 34), rgb(189, 184, 135))",
        },
        onClick: function(){} // Callback after click
    }).showToast();
    return seleccion
}

let divTortas = document.getElementById('divTortas')
fetch('/tortas.json')
.then(response => response.json())
.then(tortas => {
tortas.forEach(torta => {
    divTortas.innerHTML += `
        <div id = torta${torta.id}>
            <p class="nombres-items"> ${torta.nombre}</p>
            <p> ${torta.ingredientes}</p>
        </div>
        <button id="boton" onclick = "agregar(${torta.id})">Agregar al carrito</button>`
    })
})

let carrito = localStorage.getItem('Carrito') ?? []

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


