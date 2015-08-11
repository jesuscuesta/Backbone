 //Siempre creamos la variable de backbone, para incializarla, más adelante.
 
 SearchView = Backbone.View.extend({
    initialize: function(){
		//Inicializamos los valores del parámetro el.
        this.render();
    },
    render: function(){
        // Compile the template using underscore
        var template = _.template( $("#search_template").html(), {} );
        // Load the compiled HTML into the Backbone "el"
        this.$el.html( template );
    },
    events: {
        "click input[type=button]": "doSearch"  
    },
    doSearch: function( event ){
        // Button clicked, you can access the element that was clicked with event.currentTarget
        alert( "Search for " + $("#search_input").val() );
    }
});
    
var search_view = new SearchView({ el: $("#search_container") });

// ---------------- Este es el botón de prueba creado por mí ------------------------
 BotonPrueba = Backbone.View.extend({
    events: {
		//Vamos añadiendo los eventos y el nombre del evento que cargaremos.
		//Podemos ir añadiendo todos los eventos separados por comas.
        "click #prueba": "doAlert",
		"mouseover #prueba": "doAlert" 
    },
    doAlert: function( event ){
        // Button clicked, you can access the element that was clicked with event.currentTarget
        alert( "Esto solo es una prueba" );
    }
});
 
// El parámetro el es el contenedor de los elementos a los que haremos referencia.
var boton_prueba = new BotonPrueba({ el: $("#iddiv") });