Person = Backbone.Model.extend({
	defaults: {
		name: 'Fetus',
		age: 0
	},
	initialize: function(){
		alert("Hola mundo");
		this.on("change:name", function(model)
		{
			var name = model.get("name");
			var age = model.get("age");
			alert(name + " - " + age);
		});
	}
},
{
	propiedadClase: "holaaa"
});

var person = new Person({name:"Thomas", age: 67});
alert(person.defaults.name);
person.set({name:"holaa",age:20});
alert(person.name);
