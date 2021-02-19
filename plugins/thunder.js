let fetch = require('node-fetch')
let limit = 30
let handler = async function (m, { conn, text, isPrems, isOwner }) {
  if (!text) throw 'Lah teksnya mana'
  conn.reply(m.chat, `Sabar bwang`, m)
  let thunder = `https://api.vhtear.com/thundertext?text=${text}&apikey=Ahmad123`
  conn.sendFile(m.chat, thunder, 'thunder.jpg', `${text}`, m)
}
handler.help = ['thunder <teks>']
handler.tags = ['maker']
handler.command = /^thunder$/i
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
