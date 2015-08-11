Contacto = Backbone.Model.extend();
Contactos = Backbone.Collection.extend({
    model : Contacto,
    url : '#'
});

contactos = new Contactos([
    { 'nombre' : 'Anthony Machine' },
    { 'nombre' : 'Miguel Campoviejo' },
    { 'nombre' : 'Mary Sun' }
]);

contactos.each( function( cadaContacto ){
    alert( 'El nombre del contacto es ' + cadaContacto.get( 'nombre' ) );
} );