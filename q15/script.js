let x = parseInt(prompt("digite um numero: "));
let qdivisores=0;

for(let i=1; i<=x; i ++){
    if(x % i == 0){
        document.write(i,"<br>");

        qdivisores++;
    }
}

document.write("numero de divisores: ", qdivisores);