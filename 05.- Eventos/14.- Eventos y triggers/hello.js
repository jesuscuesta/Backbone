    //Esta variable será la encargada de recoger el click del botón, y enlazarlo.
    var UserInputView = Backbone.View.extend({
        //Indicamos el segmento donde encuadrarenos los eventos.
        el : '#UserInput',
 
        initialize : function() {
            //Añadimos la varible, que luego lo inicializaremos.
            this.helloListView = new HelloListView();
        },
 
        events : {
            'click button' : 'addToHelloCollection'
        },
 
        //Añadimos el valor del input dentro del objeto Hello.
        addToHelloCollection : function(e) {
            var hello = new Hello({
                name : this.$('input').val()
            });
            this.helloListView.collection.add(hello);
        }
    });
 
    //Este objeto será el encargado de guardar la variable del formulario.
    //Creamos la estructura del objeto Hello, que añadiremos luego a la vista.
    var Hello = Backbone.Model.extend({
        initialize : function() {
            this.name = 'name'
        }
    });
 
    //Esta variable será la encargada de añadir la variable al documento.
    var HelloView = Backbone.View.extend({
        tagName : 'li',
        render : function() {
            $(this.el).html('Hello ' +   this.model.get('name'));
            return this;
        }
    });
 
    //Creamos una colección con el modelo Hello.
    var HelloList = Backbone.Collection.extend({
        model : Hello
    });
 
    var HelloListView = Backbone.View.extend({
 
        el : '#HelloList',
 
        initialize : function() {
            _.bindAll(this, 'render', 'appendToHelloUL');
            this.collection = new HelloList();
            this.collection.bind('add', this.appendToHelloUL);
        },
 
        render:function(){
 
            $.each(this.collection.models, function(i, helloModel){
                self.appendToHelloUL(helloModel);
            });
        },
 
        appendToHelloUL : function(helloModel) {
            var helloView = new HelloView({
                model : helloModel
            });
            $(this.el).append(helloView.render().el);
        }
    });
 
    new UserInputView();

