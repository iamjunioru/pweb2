let arr = [1, 2, 3, 4, 5, 6, 7, 2];
let numPossitivo = arr.reduce(function(ac,valorAtual){
 return ac+valorAtual;
});
console.log(numPossitivo);