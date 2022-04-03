var ingredientes = ["masa","queso","oregano","jamon","morron","muzarella","aceituna","tomate","levadura","agua"]
var pares = []
var impares = []
var contador = 0
var contadorimpares=0
var contadorpares=0


//con While

while (contador <= 9) {
  
    if(ingredientes[contador].length%2 == 0){
        
       pares[contadorpares] = ingredientes[contador]
       contadorpares ++
    }
       
    else {
       
     impares[contadorimpares] = ingredientes[contador]
     contadorimpares ++
         
    }
    
    contador++
}
     
console.log("los pares son: ",pares)
console.table("los impares son: ",impares)

   

//con for


let pares2 = []
let impares2 = []
var contadorpares2 = 0;
var contadorimpares3 = 0;


for(contador2=0;contador2<= 9;contador2++) {
    
    if(ingredientes[contador2].length%2 == 0){
    
    
    pares2[contadorpares2] = ingredientes[contador2]
        
    contadorpares2++
    
       
    }
        
    else {
        
    impares2 [contadorimpares3] = ingredientes[contador2]
    contadorimpares3++
          
    }

}

console.log("los pares son:",pares2);
console.log("los impares son:",impares2);







