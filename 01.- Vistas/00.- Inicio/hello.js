$(document).ready(function(){
    Vista = Backbone.View.extend({
       render: function(){
           $(this.el).text('Hola Mundo');
           return this;
       }
    });
 
    var v = new Vista();
    $('body').append(v.render().el); //Insertamos el div dentro del body de la página
});