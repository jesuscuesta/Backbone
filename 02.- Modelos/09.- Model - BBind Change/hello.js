Cliente = Backbone.Model.extend();
var cliente = new Cliente({nombre:'Alfonso',apellidos:'Marín Marín'});
 
cliente.bind('change',function(target, options){
    //options es el mismo objeto hash que se pasa desde el comando set(attrs, [options])
    alert('Atributo modificado');
});
 
cliente.bind('change:nombre', function(target, valor, options){
   //Podemos acceder a la variable interna
   var old = this.previousAttributes().nombre;
   alert('Modificado nombre a ' + valor + '. Antiguo valor:' + old);
});
cliente.set({nombre:'Antonio'});

/*
Como podemos ver en el ejemplo, podemos hacer uso del método previousAttributes 
para acceder al valor de todos los atributos del modelo en su estado previo al 
cambio, o utilizando previous(attr) para conocer el antiguo valor de un determinado 
atributo. Si por el contrario solo quisiéramos el subconjunto de atributos 
modificados, podremos hacer uso de changedAttributes:
*/

var cliente = new Cliente({nombre:'Alfonso',apellidos:'Marín Marín'});
cliente.bind('change', function(){
    alert(JSON.stringify(this.changedAttributes()));
});
cliente.set({nombre:'Antonio', edad:'31'});// Alerta imprimiría: {"nombre":"Antonio","edad":"31"}