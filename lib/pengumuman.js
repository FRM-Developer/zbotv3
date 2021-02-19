let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text, participants }) => {
  let uses = participants.map(u => u.jid)
  conn.sendMessage(m.chat, text, MessageType.extendedText, { contextInfo: { mentionedJid: uses } })
}
handler.help = ['pengumuman','announce','hidetag'].map(v => v + ' [teks]')
handler.tags = ['group']
handler.command = /^(pengumuman|announce|hiddentag|hidetag)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler

