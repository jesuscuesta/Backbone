var Modelo = Backbone.Model.extend({
    propiedadDeInstancia: "Valor de instancia"
},{
    propiedadDeClase: "Valor de clase"
});
var modelo = new Modelo();
alert(modelo.propiedadDeInstancia); // Valor de instancia
alert(Modelo.propiedadDeClase); // Valor de clase (date cuenta de la mayúscula)