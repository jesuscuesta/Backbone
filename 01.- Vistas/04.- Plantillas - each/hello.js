//Adjuntamos los datos usando las plantillas de underscore.
// También podríamos usar las de handlebars.
Personaje = Backbone.Model.extend();
VistaPersonaje = Backbone.View.extend({
    //Indicamos las variables globales que usaremos.
    //Donde vamos a insertar el código.
    el: '#search_container',
    //La plantilla y el código que le pondremos. Usamos underscore.js
    plantilla: _.template( $('#plantilla-vistapersonaje2').html() ),

    //Inicializamos 
    initialize: function( modelo ){
        //A el, que hemos indicado arriba, le ponemos el código de la plantilla,
        //   con la variable json con los datos obtenidos.
        this.$el.html( this.plantilla ( modelo.toJSON() ));
    }
});

personaje = new Personaje(
    {"prueba": 
    [
        {"nombre": "Antonio Machín", "url": "http://es.wikipedia.org/wiki/Antonio_Mach%C3%ADn"},
        {"nombre": "Santiago", "url": "http://es.wikipedia.org/wiki/Antonio_Mach%C3%ADn"},
        {"nombre": "Madrid", "url": "http://es.wikipedia.org/wiki/Antonio_Mach%C3%ADn"}
    ]
    }
);
vistaPersonaje = new VistaPersonaje( personaje );