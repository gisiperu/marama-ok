class Torta {
    constructor(id, nombre, ingredientes, precioChica, precioGrande) {
        this.id = id
        this.nombre = nombre
        this.ingredientes = ingredientes
        this.precioChica = precioChica
        this.precioGrande = precioGrande
    }
    /*precioTotal(totalTortas) {
        let torta1era = prompt("Ingrese una torta de la lista")
        let torta2da = prompt("Ingrese otra torta de la lista")
        let torta3era = prompt("Ingrese otra torta de la lista")|||
        this.precio += totalTortas
    } */
}
const tortas = [
    {id: 1, nombre: "Berrie pie", ingredientes: "Masa sablée, mousse de chocolate blanco y cremoso de frutos rojos", precioChica: 2100, precioGrande: 3000},
    {id: 2, nombre: "Cheescake", ingredientes: "Base de chocolate, mousse de chocolate blanco y cremoso de maracuyá", precioChica: 2100, precioGrande: 3000},
    {id: 3, nombre: "Chocoberry", ingredientes: "Mousse de chocolate y mousse de frutos rojos", precioChica: 2200, precioGrande: 3100},
    {id: 4, nombre: "Carrot cake", ingredientes: "Bizcochuelo de zanahoria con nueces y pasas de uva, rellena y cubierta de una crema de manteca y queso", precioChica: 1700, precioGrande: 2400},
    {id: 5, nombre: "Crocante chocorange", ingredientes: "Masa sablée, cremoso de naranja, ganche de chocolate y crocante de almendras", precioChica: 2000, precioGrande: 2850},
    {id: 6, nombre: "Crumble de manzanas", ingredientes: "Masa sablée, compota de manzanas con canela y crumble de nueces", precioChica: 1700, precioGrande: 2400},
    {id: 7, nombre: "Lemon pie", ingredientes: "Masa sablée, curd de limón y merengue italiano", precioChica: 1600, precioGrande: 2300},
    {id: 8, nombre: "Mousse del bosque", ingredientes: "Base de chocolate, mousse y mermelada de frutos del bosque", precioChica: 2000, precioGrande: 2850},
    {id: 9, nombre: "Mousse tropical", ingredientes: "Base de chocolate, mousse y mermelada de maracuyá", precioChica: 2000, precioGrande: 2850},
    {id: 10, nombre: "Nougat", ingredientes: "Masa sablée de chocolate, relleno de frutos secos y caramelo, mousse de chocolate", precioChica: 2200, precioGrande: 3100},
    {id: 11, nombre: "Pirineos", ingredientes: "Brownie con nuez, dulce de leche y merengue italiano", precioChica: 1900, precioGrande: 2700},
    {id: 12, nombre: "Rogel", ingredientes: "Masa neutra, dulce de leche y merengue italiano", precioChica: 1700, precioGrande: 2400},
    {id: 13, nombre: "Sambayón", ingredientes: "Base de chocolate, bananas caramelizadas, mousse de Oporto y ganache de chocolate", precioChica: 1900, precioGrande: 2700},
    {id: 14, nombre: "Tarta de coco y dulce de leche", ingredientes: "Masa sablé, dulce de leche y relleno de coco", precioChica: 1600, precioGrande: 2300},
    {id: 15, nombre: "Tentación", ingredientes: "Base húmeda de chocolate, dulce de leche, mousse de chocolate y baño de cacao", precioChica: 2000, precioGrande: 2850},
    {id: 16, nombre: "Tiramisú", ingredientes: "Mousse de queso, creme brulée de café y vainillas remojadas en almibar de café", precioChica: 1800, precioGrande: 2600},
    {id: 17, nombre: "Trichoco", ingredientes: "Base húmeda de chocolate y tres mousses: de chocolate amargo, con leche y blanco", precioChica: 2200, precioGrande: 3300},
]

let respuesta = parseInt(prompt("Elija un número entre 1 y 17"))
switch(respuesta) {
    case 1:
        console.log(`Su torta es ${tortas[1].nombre}, el precio para 10 porciones es de $${tortas[1].precioChica} y el precio para 16 porciones es de $${tortas[1].precioGrande}. Si tu compra es mayor a $5000, tenés un descuento del 20%.`)
        break
    case 2:
        console.log(`Su torta es ${tortas[2].nombre}, el precio para 10 porciones es de $${tortas[2].precioChica} y el precio para 16 porciones es de $${tortas[2].precioGrande}. Si tu compra es mayor a $5000, tenés un descuento del 20%.`)
        break
    case 3:
        console.log(`Su torta es ${tortas[3].nombre}, el precio para 10 porciones es de $${tortas[3].precioChica} y el precio para 16 porciones es de $${tortas[3].precioGrande}. Si tu compra es mayor a $5000, tenés un descuento del 20%.`)
        break
    case 4:
        console.log(`Su torta es ${tortas[4].nombre}, el precio para 10 porciones es de $${tortas[4].precioChica} y el precio para 16 porciones es de $${tortas[4].precioGrande}. Si tu compra es mayor a $5000, tenés un descuento del 20%.`)
        break
    case 5:
        console.log(`Su torta es ${tortas[5].nombre}, el precio para 10 porciones es de $${tortas[5].precioChica} y el precio para 16 porciones es de $${tortas[5].precioGrande}. Si tu compra es mayor a $5000, tenés un descuento del 20%.`)
        break
    case 6:
        console.log(`Su torta es ${tortas[6].nombre}, el precio para 10 porciones es de $${tortas[6].precioChica} y el precio para 16 porciones es de $${tortas[6].precioGrande}. Si tu compra es mayor a $5000, tenés un descuento del 20%.`)
        break
    case 7:
        console.log(`Su torta es ${tortas[7].nombre}, el precio para 10 porciones es de $${tortas[7].precioChica} y el precio para 16 porciones es de $${tortas[7].precioGrande}. Si tu compra es mayor a $5000, tenés un descuento del 20%.`)
        break
    case 8:
        console.log(`Su torta es ${tortas[8].nombre}, el precio para 10 porciones es de $${tortas[8].precioChica} y el precio para 16 porciones es de $${tortas[8].precioGrande}. Si tu compra es mayor a $5000, tenés un descuento del 20%.`)
        break
    case 9:
        console.log(`Su torta es ${tortas[9].nombre}, el precio para 10 porciones es de $${tortas[9].precioChica} y el precio para 16 porciones es de $${tortas[9].precioGrande}. Si tu compra es mayor a $5000, tenés un descuento del 20%.`)
        break
    case 10:
        console.log(`Su torta es ${tortas[10].nombre}, el precio para 10 porciones es de $${tortas[10].precioChica} y el precio para 16 porciones es de $${tortas[10].precioGrande}. Si tu compra es mayor a $5000, tenés un descuento del 20%.`)
        break
    case 11:
        console.log(`Su torta es ${tortas[11].nombre}, el precio para 10 porciones es de $${tortas[11].precioChica} y el precio para 16 porciones es de $${tortas[11].precioGrande}. Si tu compra es mayor a $5000, tenés un descuento del 20%.`)
        break
    case 12:
        console.log(`Su torta es ${tortas[12].nombre}, el precio para 10 porciones es de $${tortas[12].precioChica} y el precio para 16 porciones es de $${tortas[12].precioGrande}. Si tu compra es mayor a $5000, tenés un descuento del 20%.`)
        break
    case 13:
        console.log(`Su torta es ${tortas[13].nombre}, el precio para 10 porciones es de $${tortas[13].precioChica} y el precio para 16 porciones es de $${tortas[13].precioGrande}. Si tu compra es mayor a $5000, tenés un descuento del 20%.`)
        break
    case 14:
        console.log(`Su torta es ${tortas[14].nombre}, el precio para 10 porciones es de $${tortas[14].precioChica} y el precio para 16 porciones es de $${tortas[14].precioGrande}. Si tu compra es mayor a $5000, tenés un descuento del 20%.`)
        break
    case 15:
        console.log(`Su torta es ${tortas[15].nombre}, el precio para 10 porciones es de $${tortas[15].precioChica} y el precio para 16 porciones es de $${tortas[15].precioGrande}. Si tu compra es mayor a $5000, tenés un descuento del 20%.`)
        break
    case 16:
        console.log(`Su torta es ${tortas[16].nombre}, el precio para 10 porciones es de $${tortas[16].precioChica} y el precio para 16 porciones es de $${tortas[16].precioGrande}. Si tu compra es mayor a $5000, tenés un descuento del 20%.`)
        break
    case 17:
        console.log(`Su torta es ${tortas[17].nombre}, el precio para 10 porciones es de $${tortas[17].precioChica} y el precio para 16 porciones es de $${tortas[17].precioGrande}. Si tu compra es mayor a $5000, tenés un descuento del 20%.`)
        break
    default:
        console.log("Ingrese un número válido")
}
let precioTotal = tortas.reduce((torta1, torta2, torta3, torta4, torta5, torta6) => torta1 + torta2 + torta3 + torta4 + torta5 + torta6 + 0)
console.log(precioTotal)
let descuento = (precioTotal) => {
    if (precioTotal >= 5000) {
        precioTotal *= 0,8
        } 
        return precioTotal
}

