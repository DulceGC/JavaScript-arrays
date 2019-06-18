var dulce = {
  nombre: 'Dulce',
  apellido: 'González',
  altura: 1.50
}
var sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszyc',
  altura: 1.72
}
var alan = {
  nombre: 'Alán',
  apellido: 'Perez',
  altura: 1.86
}
var martin = {
  nombre: 'Martin',
  apellido: 'Gomez',
  altura:1.85
}
var vicky = {
  nombre: 'Vicky',
  apellido: 'Zapata',
  altura:1.56
}
var paula = {
  nombre: 'Paula',
  apellido: 'Barros',
  altura:1.76
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

//persona.altura = persona.altura *100


var personasCms = personas.map(pasarAlturaACms)


console.log(personasCms);
//console.log(personasBajas);
