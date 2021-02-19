let fetch = require('node-fetch')
let limit = 30
let handler = async function (m, { conn, text, isPrems, isOwner }) {
  if (!text) throw 'Lah teksnya mana'
  conn.reply(m.chat, `Sabar yak, jangan kaya dia yang gak sabaran`, m)
  let glxy = `https://api.vhtear.com/galaxytext?text=${text}&apikey=Ahmad123`
  conn.sendFile(m.chat, glxy, 'galaxy.png', `${text}`, m)
}
handler.help = ['galaxy <teks>']
handler.tags = ['maker']
handler.command = /^galaxy$/i
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
