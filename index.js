const TelegramApi = require('node-telegram-bot-api')

const request = require('request')

const token = '5277740558:AAFOIGoOCkVg-m2YyFnHmqUwzVcNl6tlhnU'

const bot = new TelegramApi(token, {polling: true})

bot.onText(/\/start/, async (msg) =>{
    console.log(msg)
})