let n = parseInt(prompt("digite o valor de n: "));
let x = 1;
let produto = 1;

while(produto<n){

    prod = x * (x+1)*(x+2);
    x = x + 1;
}
    x = x - 1;

    if(produto == n){
    document.write("o número é triangular: ",n," = ",x,"*",x+1,"*",x+2);
}
    else{
    document.write("o número não é triangular");
}