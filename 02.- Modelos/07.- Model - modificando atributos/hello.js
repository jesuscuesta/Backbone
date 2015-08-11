Cliente = Backbone.Model.extend({
    defaults: {
        empresa: 'Unknow',
        telefonos: []
    },
    initialize: function(attrs, opts){
    }
});

var cliente = new Cliente({nombre: 'Antonio', apellidos: 'García Ros'});
cliente.set({edad: 31, soltero: false});
alert(cliente.get('edad')); // 31