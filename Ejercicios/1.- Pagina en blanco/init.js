$(document).ready(function(){
	Vista = Backbone.View.extend({
		render: function()
		{
			$(this.el).text("Hola mundo");
			return this;
		}
	});
	
	//Creamos la variable partiendo de la anterior creada.
	var v = new Vista();
	$('body').append(v.render().el); //Insertamos el div dentro del body de la página
});