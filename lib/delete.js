let handler = function (m) {
  if (!m.quoted) throw 'Reply pesan bot!'
  let { fromMe, id, isBaileys } = m.quoted
  if (!fromMe) throw 'Kaga bisa ngapusin chat orang lain'
  if (!isBaileys) throw 'Cuman bisa ngapusin chat gw'
  this.deleteMessage(m.chat, {
    fromMe,
    id,
    remoteJid: m.chat
  })
}
handler.help = ['del', 'delete']
handler.tags = ['info']

handler.command = /^del(ete)?$/i

module.exports = handler
