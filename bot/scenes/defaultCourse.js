const bot = require('../bot')
const fx = require('money');


bot.on('inline_query', async (ctx) => {
  const query = ctx.inlineQuery.query;
  const match = query.match(/(\d+(\.\d+)?)\s*([A-Z]{3})\s*([A-Z]{3})/i);

  if (match) {
    const amount = parseFloat(match[1]);
    const fromCurrency = match[3].toUpperCase();
    const toCurrency = match[4].toUpperCase();

    try {
      const result = fx(amount).from(fromCurrency).to(toCurrency);
      const response = [
        {
          type: 'article',
          id: query,
          title: `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`,
          input_message_content: {
            message_text: `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`
          }
        }
      ];

      ctx.answerInlineQuery(response);
    } catch (error) {
      ctx.answerInlineQuery([
        {
          type: 'article',
          id: '1',
          title: 'Error',
          input_message_content: {
            message_text: 'Incorrect code or not exist'
          }
        }
      ]);
    }
  } else {
    ctx.answerInlineQuery([]);
  }
});
