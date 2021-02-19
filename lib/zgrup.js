let handler = function (m) {
  conn.reply(m.chat, 'Link Z BOT OFFICIAL\n\n*https://chat.whatsapp.com/DFitNKgxdv3G3S5ylGWPui*\n\nJangan lupa join ya kak', m)
}
handler.help = ['group']
handler.tags = ['info']

handler.command = /^(group|grup)$/i

module.exports = handler
