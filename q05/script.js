let a = 18;
let b = 12;
restante = 1;
if(a>=b){
 while(restante != 0){
     restante = a % b;
     a = b;
     b = restante;
 }
}