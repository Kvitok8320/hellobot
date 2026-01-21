require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

// Получаем токен из переменной окружения
const token = process.env.BOT_TOKEN;

if (!token) {
  console.error('Ошибка: BOT_TOKEN не найден в .env файле!');
  console.error('Убедитесь, что файл .env содержит строку: BOT_TOKEN=ваш_токен');
  console.error('БЕЗ кавычек и БЕЗ пробелов вокруг знака =');
  process.exit(1);
}

// Создаем экземпляр бота
const bot = new TelegramBot(token, { polling: true });

// Варианты ответов
const responses = [
  'Привет',
  'Добрый день!',
  'Приятная встреча!'
];

// Обработчик всех текстовых сообщений
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  
  // Выбираем случайный ответ
  const randomResponse = responses[Math.floor(Math.random() * responses.length)];
  
  // Отвечаем на любое сообщение
  bot.sendMessage(chatId, randomResponse);
});

console.log('Бот запущен и готов к работе!');

