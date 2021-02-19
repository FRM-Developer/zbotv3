let fetch = require('node-fetch')
let limit = 30
let handler = async function (m, { conn, text, isPrems, isOwner }) {
  if (!text) throw 'Lah teksnya mana'
  conn.reply(m.chat, `Sabar bwang`, m)
  let glxy = `https://api.vhtear.com/stylelogo?text=${text}&apikey=Ahmad123`
  conn.sendFile(m.chat, glxy, 'style logo.png', `${text}`, m)
}
handler.help = ['stylelogo <teks>']
handler.tags = ['maker']
handler.command = /^stylelogo$/i
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
