let cigarro = parseInt(prompt("quantos cigarros você fuma por dia?"));
let tempo = parseInt(prompt("a quantos anos você fuma? "));
let valorCigarro = 0.25;

let gastoDia = cigarro * valorCigarro;
let gastoTotal = (tempo * 365) * gastoDia;

document.write("você gastou esse valor com cigarro R$ ", gastoTotal);