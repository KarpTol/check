// Импортируем библиотеку для работы с HTML и CSS
const { remote, ipcRenderer } = require('electron');
const { ipcMain } = require("electron");

// Функция для проверки чек-ина
function checkIn() {
  // Получаем данные пользователя из формы
  const userData = {
    name: document.getElementById("nameInput").value,
    email: document.getElementById("emailInput").value
  };

  // Отправляем запрос на сервер для проверки чек-ина
  ipcRenderer.send("checkInRequest", userData);
}

// Обработчик ответа от сервера
ipcRenderer.on("checkInResponse", (event, response) => {
  if (response.success) {
    // Если чек-ин прошел успешно, выводим сообщение об этом
    document.getElementById("checkInResult").innerHTML = `Чек-ин успешно выполнен!`; //Преподователь написал здесь плохое слово
  } else {
    // В противном случае выводим сообщение об ошибке
    document.getElementById("checkInResult").innerHTML = `Ошибка при чек-ине!
