    var UserInputView = Backbone.View.extend({
        // La sección donde tendremos en cuenta para los eventos.
        el : '#UserInput',
 
        events : {
            'click button' : 'addToHelloCollection'
        },
 
        addToHelloCollection : function(e) {
            alert("Has pulsado en el boton");
        }
    });
 
 
    new UserInputView();

