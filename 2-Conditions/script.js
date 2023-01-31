console.log("coucou");

//Condition avec genre des chiffres
let score = 105;
console.log(typeof score);

if(score <= 0){
    console.log(`Score nul à chier`);
}else if(score%5 === 0){
    console.log(`Score est un multiple de 5. Il est égal à ${score}`);
}else{
    console.log(`Score = ${score}`);
}


//Condition avec une String
let message = "Hello";
console.log(typeof message);
message = message.toUpperCase();

if(message === "HELLO"){
    console.log("C'est pareil");
}
