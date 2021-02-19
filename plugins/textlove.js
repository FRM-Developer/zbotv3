let fetch = require('node-fetch')
let limit = 30
let handler = async function (m, { conn, text, isPrems, isOwner }) {
  if (!text) throw 'Lah teksnya mana'
  conn.reply(m.chat, `Mohon Tunggu sekitar 1 menit`, m)
  let glxy = `https://api.vhtear.com/lovemessagetext?text=${text}&apikey=Ahmad123`
conn.sendFile(m.chat, glxy, 'text love.png', `${text}`, m)
}
handler.help = ['textlove <teks>']
handler.tags = ['maker']
handler.command = /^textlove$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler
