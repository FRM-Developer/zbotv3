let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
◪ INFORMATION
 │
 ❏ *BOT TYPE : wabot-aq*
 ❏ *CLASS : BAILEYS*
 ❏ *NAME : Z BOT*
 ❏ *VERSION : 3.0*
 ❏ *PREFIX : Z*
 ❏ *TEAM : @ZTEAM*
 │
◪ BOT 
 │
 ❏ Z BOT v1 :
   wa.me/6283820666907
 ❏ Z BOT v2 :
   wa.me/6281990498472
 ❏ Z BOT v3 :
   wa.me/6285248508385
 │
◪ Z BOT 〙
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
