let handler = function (m) {
  this.sendContact(m.chat, '6281223546913', 'Fajar', m)
 this.sendContact(m.chat, '687842141078', 'Nabil', m)
  conn.reply(m.chat, 'Itu Bang Nomor Ownernya', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
