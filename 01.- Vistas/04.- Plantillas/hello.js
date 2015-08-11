Personaje = Backbone.Model.extend();
VistaPersonaje = Backbone.View.extend({
    el: '#search_container',
    plantilla: _.template( $('#plantilla-vistapersonaje2').html() ),
    initialize: function( modelo ){
        this.$el.html( this.plantilla ( modelo.toJSON() ));
    },
    render: function(){
        $('#vista02').html( this.$el );
        return this;
    }
});

personaje = new Personaje({
    'nombre': 'Antonio Machín',
    'url': 'http://es.wikipedia.org/wiki/Antonio_Mach%C3%ADn'
})
vistaPersonaje = new VistaPersonaje( personaje );