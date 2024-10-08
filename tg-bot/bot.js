import TgBotApi from "node-telegram-bot-api";

const bot = new TgBotApi(process.env.TOKEN, {
  polling: true,
});

export const sendFeedback = (phone, comment) => {
  bot.sendMessage(
    -4565793050,
    `Поступила заявка на обратную связь.\n\nНомер телефона: ${phone}\nКомментарий: ${comment}.`
  );
};

console.log("Bot is running");
