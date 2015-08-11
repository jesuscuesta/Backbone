Cliente = Backbone.Model.extend({
    defaults: {
        empresa: 'Unknow',
        telefonos: []
    },
    nuevoTelefono: function( n_tel ){
        var telefonos_array = this.get("telefonos");
        telefonos_array.push( n_tel );
        this.set({ telefonos: telefonos_array });
    }
});
var cliente = new Cliente({name: 'Alfonso Marin', company:'Universidad de murcia', telefonos:['968000000']});
cliente.nuevoTelefono('687000000');
var telefonos = cliente.get('telefonos'); // ['968000000', '687000000']
alert(telefonos);