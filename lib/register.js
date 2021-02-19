const { createHash } = require('crypto')
let Reg = /(.*)([.|])([0-9]*)$/i
let handler = async function (m, { text, usedPrefix }) {
  let user = global.DATABASE._data.users[m.sender]
  if (user.registered === true) throw `Anda sudah terdaftar`
  if (!Reg.test(text)) throw `Format salah\n*${usedPrefix}daftar [nama.umur]*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Lah namanya mana'
  if (!age) throw 'Lah umurnya mana'
  user.name = name
  user.age = parseInt(age)
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
*「 REGISTER 」*

Nama : ${name}
Umur : ${age}
SN : ${sn}
`.trim())
}

handler.command = /^(daftar|reg(ister)?)$/i

module.exports = handler

