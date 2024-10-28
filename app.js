const TelegramBot = require('node-telegram-bot-api');

const token = '7912735445:AAHPa9q4M80v9Pvh6QbtE09H-BW1cBteRzY';

const bot = new TelegramBot(token, { polling: true });

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    async function startBot() {
        const menu_game = {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "▶️ Играть сейчас",
                            web_app: {url: "https://funstolo.pro/5cjyQg"},
                        },
                    ],
                    [
                        {
                            text: "🌐 Web - версия",
                            url: "https://funstolo.pro/5cjyQg",
                        },
                    ],
                ],
            },
            parse_mode: 'HTML'
        }

        if (text === '/start') {
            await bot.sendPhoto(chatId, './img/home-2.jpg');
            await bot.sendMessage(chatId, " 🔥 Лучшие условия ждут на Dragon Money: \n\n\n<b>🔸СРЕДНИЙ RTP 97%</b> \n\n<b>🔸БЕЗЛИМИТНЫЕ и БЫСТРЫЕ выплаты</b> \n\n<b>🔸10% КЕШБЭК</b> \n\n<b>🔸РОЗЫГРЫШИ И ПРОМИКИ ДЛЯ ИГРОКОВ</b> \n\n\n Жми на кнопку и выигрывай прямо в Telegram👇", menu_game) 
        }
    }
    startBot()
})