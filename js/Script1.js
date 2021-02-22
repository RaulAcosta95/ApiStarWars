//Enlace de la api https://swapi.dev/
const API_URL=`https://swapi.dev/api/`;
//Id del personaje
const PEOPLE_URL=`people/:id`;

//Aquí es el primer parámetro de $.get, que es = https://swapi.dev/api/people/1
//Es la solicitud hecha
//Ancla el enlace de la api con el request del personaje 1 (luke)
const LUKE_URL=`${API_URL}${PEOPLE_URL.replace(`:id`,1)}`

//Este es el segundo parámetro de $.get, Se le indica a JQuery que la solicitud se hace hacia 
//otra página (el html)
//Son las OPTIONS del JQuery
const OPTS={crossDomain:true}

//A través de console.log(arguments) puedo ver en consola los argumentos que 
//arroja el request 
// gender: "male"
// hair_color: "blond"
// height: "172"
// homeworld: "http://swapi.dev/api/planets/1/"
// mass: "77"
// name: "Luke Skywalker"
// skin_color: "fair"
//Y gracias a eso puedo imprimir los datos que quiera de ese request
$.get(LUKE_URL,OPTS,function(){
    console.log(arguments);
});

//Función que realiza la impresión, gracias a que vi que el request arroja 
//los argumentos name, height, mass, etc

const ON_PEOPLE_RESPONSE=function(persona){
    console.log(`Hola, yo soy ${persona.name} mi altura es ${persona.height} y peso ${persona.mass} kilogramos`);

}

//La función .get solo se ejecuta si encuentra los datos 
//Se ejecuta cuando haya encontrado los datos
//Por lo tanto, se pone en CALLBACK, y se vuelve de esas funciones asincronas
$.get(LUKE_URL,OPTS,ON_PEOPLE_RESPONSE);



//---------------------------------------------------------------------------
//A partir de acá, es código para imprimir en el html
var nombre
var altura
var peso
const ON_PEOPLE_RESPONSE_HTML=function(persona){
    console.log(`Hola html, yo soy ${persona.name} mi altura es ${persona.height} y peso ${persona.mass} kilogramos`);
    nombre=persona.name
    altura=persona.height
    peso=persona.mass
}

function imprimepersonajehtml(){
    if (nombre) {
        const div_html = document.querySelector("#DATOS_PERSONAJE");
        div_html.innerHTML = `
        <br>
        <h5>Personaje</h5> <br>
        <p>
        Personaje: ${nombre} <br>
        Altura: ${altura} <br>
        Peso: ${peso}
        <br>
        Podría imprimir más datos
        </p>
        `;
    }else{
        const div_html = document.querySelector("#DATOS_PERSONAJE");
        div_html.innerHTML = `
        <br>
        <h5>Personaje</h5> <br>
        <p>
        Aún no envías solicitud de personaje
        </p>
        `; 
    }

}
var nuevopersonaje
   var obtenerpersonaje = function(){
        var obteneridpersonaje = document.getElementById('PERSONAJE_ID').value;
        nuevopersonaje=obteneridpersonaje;
        console.log(`Nuevo personaje ${nuevopersonaje}`);

        const NUEVO_URL=`${API_URL}${PEOPLE_URL.replace(`:id`,`${nuevopersonaje}`)}`
        $.get(NUEVO_URL,OPTS,ON_PEOPLE_RESPONSE_HTML);


        return false;
    }

