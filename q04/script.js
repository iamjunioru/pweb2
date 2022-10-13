let x = parseInt(prompt("Digite um valor"));
let fat = 1;
if (x == 0) document.write("1");
else {
  do {
    fat = fat * x;
    x = x - 1;
  } while (x >= 1);
  document.write(fat);
}