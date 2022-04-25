class Torta {
    constructor(nombre, ingredientes, precio) {
        this.nombre = nombre
        this.ingredientes = ingredientes
        this.precio = precio
    }
    precioTotal(totalTortas) {
        let torta1era = prompt("Ingrese una torta de la lista")
        let torta2da = prompt("Ingrese otra torta de la lista")
        let torta3era = prompt("Ingrese otra torta de la lista")
        this.precio += totalTortas
    } 
}
const torta1 = new Torta("Berry pie", "Masa sablée, mousse de chocolate blanco y cremoso de frutos rojos", 500)
const torta2 = new Torta("Blanco pasión", "Base de chocolate, mousse de chocolate blanco y cremoso de maracuyá", 600)
const torta3 = new Torta("Cheescake", "Base de chocolate, mousse de chocolate blanco y cremoso de maracuyá", 700)
const torta4 = new Torta("Coffelate", "Cláscio con basBase de chocolate, creme brulée de café y mousse de chocolate y cafée de galletitas Lincoln y mermelada casera de frutos rojos o de maracuyá", 550)
/*const torta5 = new Torta("Crocante chocorange", "Masa sablée, cremoso de naranja, ganche de chocolate y crocante de almendras, 750")
const torta6 = new Torta("Crumble de manzanas", "Masa sablée, compota de manzanas con canela y crumble de nueces", 800)
const torta7 = new Torta("Lemon pie", "Masa sablée, curd de limón y merengue italiano, 550")
const torta8 = new Torta("Mousse del bosque", "Base de chocolate, mousse y mermelada de frutos del bosque", 750)
const torta9 = new Torta("Mousse tropical", "Base de chocolate, mousse y mermelada de maracuyá", 800)
const torta10 = new Torta("Nougat", "Masa sablée de chocolate, relleno de frutos secos y caramelo, mousse de chocolate", 850)
const torta11 = new Torta("Pirineos", "Brownie con nuez, dulce de leche y merengue italiano, 800")
const torta12 = new Torta("Rogel", "Masa neutra, dulce de leche y merengue italiano, 550")
const torta13 = new Torta("Sambayón", "Base de chocolate, bananas caramelizadas, mousse de Oporto y ganache de chocolate", 750)
const torta14 = new Torta("Tarta de coco y dulce de leche", "Masa sablé, dulce de leche y relleno de coco", 650)
const tort15 = new Torta("Tentación", "Base húmeda de chocolate, dulce de leche, mousse de chocolate y baño de cacao", 700)
const torta16 = new Torta("Tiramisú", "Mousse de queso, creme brulée de café y vainillas remojadas en almibar de café", 750)
const torta17 = new Torta("Trichoco", "Base húmeda de chocolate y tres mousses: de chocolate amargo, con leche y blanco", 800) */

let precioTotal = 0
let descuento = (precioTotal) => precioTotal * 0.2  //let descuento = (precioTotal * 0,2) 
if (precioTotal >=3000) {
    precioTotal -= descuento
}

let respuesta = parseInt(prompt("Elija un número entre 1 y 4"))
switch(respuesta) {
    case 1:
        console.log(`Su torta es ${torta1.nombre}, el precio es ${torta1.precio}. Si tu compra es mayor a $3000, tenés un descuento del 20%. Te quedaría en ${descuento(torta1.precio)}`)
        break
    case 2:
        console.log(`Su torta es ${torta2.nombre}, el precio es ${torta2.precio}. Si tu compra es mayor a $3000, tenés un descuento del 20%. Te quedaría en ${descuento(torta2.precio)}`)
        break
    case 3:
        console.log(`Su torta es ${torta3.nombre}, el precio es ${torta3.precio}. Si tu compra es mayor a $3000, tenés un descuento del 20%. Te quedaría en ${descuento(torta3.precio)}`)
        break
    case 4:
        console.log(`Su torta es ${torta4.nombre}, el precio es ${torta4.precio}. Si tu compra es mayor a $3000, tenés un descuento del 20%. Te quedaría en ${descuento(torta4.precio)}`)
        break
    default:
        console.log("Ingrese un número válido")
}
