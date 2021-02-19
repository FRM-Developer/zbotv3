let fetch = require('node-fetch')
let limit = 30
let handler = async function (m, { conn, text, isPrems, isOwner }) {
  if (!text) throw 'Lah teksnya mana'
  conn.reply(m.chat, `Sabar bwang`, m)
  let glxy = `https://api.vhtear.com/metal_maker?text=${text}&apikey=Ahmad123`
  conn.sendFile(m.chat, glxy, 'metal text.png', `${text}`, m)
}
handler.help = ['metaltext <teks>']
handler.tags = ['maker']
handler.command = /^metaltext$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 1

module.exports = handler
