let handler = async m => m.reply(`
◪ DONASI Z BOT
 │
 ❏ Ovo : 0819-9049-8472
 ❏ Dana : 0819-9049-8472
 ❏  Gopay : 0819-9049-8472
 │
 ❏ SAWERIA :
  https://saweria.co/taka12
 │
◪ NOTE :
 Kirim Screenshot sebagai bukti ke nomor : http://wa.me/6281223546913
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
