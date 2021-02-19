let fetch = require('node-fetch')
let limit = 30
let handler = async function (m, { conn, text, isPrems, isOwner }) {
  if (!text) throw 'Lah teksnya mana'
  conn.reply(m.chat, `Sabar bwang`, m)
  let glxy = `https://api.vhtear.com/glowtext?text=${text}&apikey=Ahmad123`
  conn.sendFile(m.chat, glxy, 'glow text.png', `${text}`, m)
}
handler.help = ['glowtext <teks>']
handler.tags = ['maker']
handler.command = /^glowtext$/i
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
