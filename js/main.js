/*1. Declara 2 variables numéricas (con el valor que desees), he indica cual es mayor
de los dos. Si son iguales indicarlo también. Ves cambiando los valores para
comprobar que funciona.*/
 
 
 
 
 
 //console.log("hola mundo")
/* let num1 = parseInt(prompt("Introduce el primer numero"))
 let num2 = parseInt(prompt("Introduce el segundo numero numero"))
if(num1 < num2){
     console.log(num2, "es mayor que" ,num1);
 }else if(num1 === num2){
    console.log("Son iguales ")
 }else {
     console.log( num1," es mayor que ", num2);
 }*/

 /*2. Declara un String que contenga tu nombre, después muestra un mensaje de
bienvenida por consola. Por ejemplo: si introduzco “Fernando”, me aparezca
“Bienvenido Fernando”.*/
 /*var nombre = ("corina") //prueba1//
 var nombre = ("elena")//prueba2//
 console.log(" Bienvenido " +  nombre)*/


 /*3. Modifica la aplicación anterior, para que nos pida el nombre que queremos
introducir (recuerda usar prompt).*/

/*let = ("nombre")
nombre = prompt("Dime tu nombre");
console.log(" bienvenido " + nombre)*/

/*Haz una aplicación que calcule el área de un círculo (pi*R2). El radio se pedirá
por teclado (recuerda pasar de String a double con parseDouble). Usa la
constante PI.*/
/*Lee un número por teclado e indica si es divisible entre 2 (resto = 0). Si no lo es,
también debemos indicarlo.*/

 /*let num = parseInt (prompt("Introduce el  numero"))

if (num % 2 == 0 ){
console.log("es divisible por 2")
}else{
console.log("no es divisible por 2")
}*/
// && AND

// || OR

// != NO
/*/6.Lee un número por teclado que pida el precio de un producto (puede tener
decimales) y calcule el precio final con IVA. El IVA sera una constante que sera
del 21%*/


/*let = ("precio")
precio = parseInt(prompt("Introduce el  precio"))
const IVA = 0.21
precioFinal = precio + ( precio*IVA )
 console.log(precioFinal)*/

/*7. Muestra los números del 1 al 100 (ambos incluidos). Usa un bucle while.*/
/*let i = 1
while (i <= 100){
console.log(i );i ++
}*/
 /*8. Haz el mismo ejercicio anterior con un bucle for.*/
 /*for(let i=1; i <=100; i++) {
    console.log(i)
 }*/
 /*9. Muestra los números del 1 al 100 (ambos incluidos) divisibles entre 2 y 3. Utiliza
el bucle que desees.*/
  /* 


   
   }*/
   /*let i = 1
   i =  i <= 100 ; i%2 == 0 || i%3 == 0 ;i++
   console.log(i)*/
  /* Pida un número por prompt, acto seguido irá restando ese número hasta llegar a 0 (usando un bucle), cada uno de los números que devuelva la resta en el bucle, hay que decir por console.log si ese número es par.*/

 /* let numero = parseInt(prompt("Dame un número"))

  for ( let i = num; i >= 0; i-- ){
    if(i % 2 === 0)
    console.log(i );*/
    
    /*ahora hará una suma de todos los pares y lo mostrará mediante console.log una vez haya salido del bucle, además de ello, para sufrimiento del alumnado, no sólo nos dirá si un número es par, también nos dirá si es impar, en vez de un if else , usareis una ternaria.*/

  
   /* let num = parseInt(prompt("Dame un número"))
    let resultado = 0
    while (num > 0){
    if (  num %2 === 0  ){
    console.log("es par", num);
    resultado += num;

    }else{
        console.log("es impar", num); 
    }

}
console.log(resultado)*/
/*let number = parseInt(prompt("Introduce un número:"));
let totalParNumbers = 0;
while (number > 0) {
    number%2 != 0 ? (
        console.log(number + " es un número impar")
    ) : (
        console.log(number + " es un número par"),
        totalParNumbers += number
    );
    number--;
}
console.log ("La suma total de los números páres es: " + totalParNumbers)*/
/*let number = parseInt(prompt("Introduce un número:"));
let totalParNumbers = 0;
while (number > 0) {
    number%2 != 0 ? (
        console.log(number + " es un número impar")
    ) : (
        console.log(number + " es un número par"),
        totalParNumbers += number
    );
    number--;
}
console.log ("La suma total de los números páres es: " + totalParNumbers)*/
//funcciones clasica 


/*function Sumar(num1, num2){

    let resultado = num1 +num2;
    console.log(resultado);
        return resultado
       
    };
    let resultado = Sumar(2,8)*/
    /*function Sumar(num1, num2){

        let resultado = num1 -num2;
        console.log(resultado);
            return resultado
           
        };
        let resultado = Sumar(2,8)*/

       /* funccion flecha
       
       const Sumar = (num1,num2) => {
            let resultado = num1 + num2;
            console.log(resultado);
            return resultado = num1 + num2;

        }
        let resultado = Sumar(3,7)*/

  /*let num1 = parseInt(prompt("Introduce el primer numero"))
  let num2 = parseInt(prompt("Introduce el segundo numero numero"))
 const dividir=(num1, num2) =>{

    let resultado = num1 /num2;
    console.log(resultado);
        return resultado
       
    };
    let resultado = dividir(num1,num2)*/
   //debugger;
/*let alumnos = ["Alvaro","Alex","Paula","Fernando","Felipe"]
console.log(alumnos[2])
for ( let i = 0; i < alumnos.length ; i++){
    console.log(alumnos[i])
};
let hobbies = ["Marcos",19,"Gimnasio","Tenis",1.83,["1NLY","imagine dragons","lyl"]]

let nombre = prompt("Dame tu nombre")
let nombres = []
nombre ,push(nombre)*/

/*let nombre;
let nombres = [];

for ( let i = 0; i < 10 ; i++){
    nombre = prompt("Dame 10 nombres")
    nombres.push(nombre)
};
console.log(nombres)*/
/*

let comidas = ["paella","cocido","queso","pizza"]
let despensa=bebidas.concat(comidas)
console.log(despensa)*/
/*let deportes = ["tenis","baloncesto","petanca","zumo"]
console.log(resultado)
 deportes.join("* *")*/
 /*let DNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
 let numero = parseINT(prompt("Introduce tu número de DNI (sin la letra)"));
let letra = prompt("Introduce la letra de tu DNI (en mayúsculas)");

let operacion = num % 23;
let resultado = ( letra=== DNI[operacion])
           "El dni es coreccto"
           "El dni no es coreccto"
           console.log(resultado)
*/

let edad = parseInt(prompt("Introduce tu edad"))
let pais = parseInt(prompt("Introduce tu pais"))
if(edad >=21){
    console.log("puedes beber cerveza")
}else if((edad < 18)&&(pais==="Europa")){
    console.log(" no puedes beber cerveza")
}else if((edad < 21)&&(pais==="Estados unidos")){
    console.log(" no puedes beber cerveza")
}

