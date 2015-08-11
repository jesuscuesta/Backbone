var Person = new Backbone.Model({name: 'Jeremy'});
console.log(Person.get('name'));

// Validate the model name
Person.validate = function(attrs) {
	if (!attrs.name) {
		alert("I need your name alert");
		return 'I need your name';
	}
};

// Change the name
Person.set({name: 'Samuel'});
console.log(Person.get('name'));
// 'Samuel'

// Remove the name attribute, force validation
Person.unset('name', {validate: true});
// false
