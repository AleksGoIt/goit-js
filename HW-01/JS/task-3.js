"use script";

const newLocal = "jqueryismyjam";
const ADMIN_PASSWORD = newLocal;
let message = prompt("Введите ваш пароль");

if (message === null) {
  message = "Отменено пользователем!";
} else {
  if (message === ADMIN_PASSWORD) {
    message = "Добро пожаловать!";
  } else {
    message = "Доступ запрещен, неверный пароль!";
  }
}
alert(message);
