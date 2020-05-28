"use script";

let input;
let total = 0;

while (input !== null) {
  input = prompt('Введите число:');

  if (input !== null) {
    input = Number(input);

    if (Number.isNaN(input)) {
      alert('Было введено не число, попробуйте еще раз');
      continue;
    }

    total += input;
  }
}

alert(`Общая сума чисел равна: ${total}`);
