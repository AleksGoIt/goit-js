"use script";

const credits = 23580;
const pricePerDroid = 3000;
const quantityDroids = prompt("Введите количество дроидов");

if (quantityDroids === null) {
  console.log("Отменено пользователем!");
} else {
  const totalPrice = pricePerDroid * quantityDroids;

  if (totalPrice > credits) {
    console.log("Недостаточно средств на счету!");
  } else {
    console.log(
      `Вы купили '${quantityDroids}' дроидов, на счету осталось '${
        credits - totalPrice
      }' кредитов.`
    );
  }
}
