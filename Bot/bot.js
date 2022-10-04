const { Telegraf } = require("telegraf");
const TOKEN = process.env.TOKEN;
const bot = new Telegraf(TOKEN);

const WEB_LINK = process.env.WEB_LINK;

bot.start((ctx) =>
  ctx.reply("Selamat datang", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: WEB_LINK } }]],
    },
  })
);

bot.launch();
