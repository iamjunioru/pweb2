let x1 = parseInt(prompt("n1: "))
let x2 = parseInt(prompt("n2: "))
let x3 = parseInt(prompt("n3: "))
if (x1 < x2 && x2 < x3){
    document.write(`A ordem crescente é ${x1} ${x2} ${x3}`)
}
else if (x1 < x3 && x3 < x2){
    document.write(`${x1} ${x3} ${x2}`)
}
else if (x2 < x1 && x1 < x3){
    document.write(`${x2} ${x1} ${x3}`)
}
else if (x2 < x3 && x3 < x1){
    document.write(`${x2} ${x3} ${x1}`)
}
else if (x3 < x1 && x1 < x2){
    document.write(`${x3} ${x1} ${x2}`) 
}
else {
    document.write(`${x3} ${x2} ${x1}`) 
}