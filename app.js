let pregunta4="";
const pregunta1=prompt("Si está en el área de front-end o back-end, escribe uno de ellos");
if(pregunta1==="front-end"){
    pregunta4=prompt("Quiere aprender react o vue, escoge uno de ellos")
}
else if (pregunta1==="back-end") {
    pregunta4=prompt("Quiere aprender C# o Java, escoge uno de ellos")}
else{
    alert("No ingresaste lo correcto");
    pregunta1=prompt("Si está en el área de front-end o back-end, escribe uno de ellos");
}

const otraPregunta=prompt(`¿Quiere seguir especializandose en ${pregunta4}, un 1 o un 2 si quiere  Desarrollarse para convertirse en Fullstack?`);
if(otraPregunta==1){ 
    alert (`Perfecto, sigue especializandose en ${pregunta4}`)
} 
else if (otraPregunta==2){
    alert("Muy bien, que le vaya bien en el camino de Fullstack")}
else{
 alert("No escogiste ninguno")
}

const condicion= prompt("¿Hay alguna otra tecnología que te gustaría aprender? Escribe 'ok' en caso positivo.");
while (condicion==="ok"){
    var tecnologia=prompt("¿Cual?");
    alert(`Muy bien, es muy interesante  ${tecnologia}`); 
    condicion=prompt("¿Hay alguna otra tecnología que te gustaría aprender? Escribe 'ok' en caso positivo o 'no' para salir.")

}