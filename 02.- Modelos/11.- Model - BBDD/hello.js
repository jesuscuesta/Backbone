var Modelo = Backbone.Model.extend({
    propiedadDeInstancia: "Valor de instancia"
},{
    propiedadDeClase: "Valor de clase"
});
var modelo = new Modelo({
   nombre: "Erick"
});

//asignamos un valor a la propiedad "url"
modelo.url = "conector";
//guardo este usuario
modelo.save();
