var dulce = {
  nombre: 'Dulce',
  apellido: 'González',
  altura: 1.50,
  cantidadDeLibros: 91
}
var sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszyc',
  altura: 1.72,
  cantidadDeLibros: 182
}
var alan = {
  nombre: 'Alán',
  apellido: 'Perez',
  altura: 1.86,
  cantidadDeLibros: 78
}
var martin = {
  nombre: 'Martin',
  apellido: 'Gomez',
  altura:1.85,
  cantidadDeLibros: 111
}
var vicky = {
  nombre: 'Vicky',
  apellido: 'Zapata',
  altura:1.56,
  cantidadDeLibros: 91
}
var paula = {
  nombre: 'Paula',
  apellido: 'Barros',
  altura:1.76,
  cantidadDeLibros: 42
}

const esAlta = ({ altura }) => altura > 1.8
const esBaja = ({ altura }) => altura < 1.8

var personas = [dulce,sacha,alan,martin,vicky,paula]

var personasAltas = personas.filter(esAlta)
//var personasBajas = personas.filter(esBaja)
//var personasAltas = personas.filter(function(persona) {
  //return persona.altura > 1.8
//})

const pasarAlturaACms = persona => ({
  ...persona,
  altura: persona.altura * 100
})

var personasCms = personas.map(pasarAlturaACms)

//var acum = 0

//for (var i = 0; i < personas.length; i++){
  //acum = acum + personas[i].cantidadDeLibros
//}

const reducer = (acum, { cantidadDeLibros }) => acum + cantidadDeLibros

var totalDeLibros = personas.reduce(reducer, 0)

console.log(`En total todos tienen ${totalDeLibros} libros`);
