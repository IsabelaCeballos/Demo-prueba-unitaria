//importamos la libreria de chai
let chai = require('chai');

//impotación de las funcionalidades
let assert = chai.assert;
let should = chai.should;
let expect = chai.expect;

//var aeropuerto = require('../aeroline');
const { Aeroline } = require("../aeroline");


describe('Testing viajes: ', function() {
    describe('Obtener viajes test', function(){
        it('Obtener viajes test', function() {
            let viajes = [
                {
                    "origen": "Medellin",
                    "destino": "Madrid"
                },
                {
                    "origen": "Bogota",
                    "destino": "Cali"
                },
                {
                    "origen": "Bucaramanga",
                    "destino": "Barranquilla"
                },
            ]
            const result = new Aeroline(viajes);
            //console.log(result)
            assert.equal(result.obtenerCantidadViajes, 3);
        });
    });
})