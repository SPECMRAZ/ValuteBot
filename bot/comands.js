const bot = require('./bot');
const path = require('path');

bot.start(async (ctx) => {
  await ctx.reply('Welcome :3')
  const vid = path.resolve(__dirname, './gif.mp4')

  await ctx.replyWithAnimation({ source: vid })
  await ctx.reply('Bot works in inline mode\nType:\n@ConverterValute_Bot number valute valute')
  bot.telegram.sendMessage(process.env.DEV_ID, `#new user: ${ctx.from.id}`)
});
