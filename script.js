// Находим кнопку по её id
const btn = document.getElementById("playBtn");

// Находим тег <audio> по его id
const music = document.getElementById("bgMusic");

// Вешаем обработчик события "click" (что произойдет при нажатии на кнопку)
btn.addEventListener("click", () => {
  music.muted = false;      // Отключаем mute (включаем звук)
  music.play();             // Запускаем воспроизведение
  btn.style.display = "none"; // Скрываем кнопку после нажатия
});