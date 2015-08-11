var Song = Backbone.Model.extend({
	defaults: {
		name: "Not specified",
		artist: "Not specified"
	},
	initialize: function(){
		console.log("Music is the answer");
	}
});

var Album = Backbone.Collection.extend({
model: Song
});

var song1 = new Song({ name: "How Bizarre", artist: "OMC" });
var song2 = new Song({ name: "Sexual Healing", artist: "Marvin Gaye" });
var song3 = new Song({ name: "Talk It Over In Bed", artist: "OMC" });

var myAlbum = new Album([ song1, song2, song3]);
console.log( myAlbum.models ); // [song1, song2, song3]


//La función get buscará la instancia cuyo id sea el que le pasamos como parámetro
// alert(myAlbum.get("id-de-cliente"));
// La función getByCid buscará la instancia cuyo cid sea el que le pasamos como parámetro
console.log(myAlbum.get('c1').attributes);
// La función at buscará la instancia situada en la posición pasada como parámetro
console.log(myAlbum.at(0).attributes);

//creo un objeto cualquiera con Javascript, usando notación JSON
var objeto = {};
//extiendo ese objeto con la clase Backbone.Events
_.extend(objeto, Backbone.Events);

objeto.on("mi_primer_evento", function(msg) {
alert("Se ha desencadenado el ");
});

objeto.trigger("mi_primer_evento");