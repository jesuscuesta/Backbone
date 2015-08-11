//Setters y getters modelos
//Añadimos unos valores por defecto.
Person = Backbone.Model.extend({
	defaults: {
		name: 'Fetus',
		age: 0
	},
	//Inicializamos la variable.
	initialize: function(){
		alert("Welcome to this world");
		//Cuando se cambie este atributo de la variable, cargaremos este valor.
		this.on("change:name", function(model){
			var name = model.get("name"); // 'Stewie Griffin'
			 alert("Changed my name to " + name );
		});
	}
	
});

//Creamos la variable con unos datos. Si no los pusiéramos,
//  cogería los puestos por defecto.
 var person = new Person({ name: "Thomas", age: 67});
 person.set({name: 'Stewie Griffin'});