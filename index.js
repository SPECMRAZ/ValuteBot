require('dotenv').config()
const bot = require('./bot/bot')

require('./bot/api/courseUpdate')
require('./bot/comands')
require('./bot/scenes/defaultCourse')

bot.launch()
// Enable graceful stop
process.once('SIGINT', () => {
  bot.stop('SIGINT')
  bot.telegram.sendMessage(process.env.DEV_ID, 'bot was stoped')
})
process.once('SIGTERM', () => {
  bot.stop('SIGINT')
  bot.telegram.sendMessage(process.env.DEV_ID, 'bot was stoped')
})