let fs = require ('fs')
let path = require('path')
let handler  = async (m, { conn, usedPrefix: _p }) => {
  try {
    let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))
    let exp = global.DATABASE.data.users[m.sender].exp
    let limit = global.DATABASE.data.users[m.sender].limit
    let name = conn.getName(m.sender)
    let d = new Date
    let locale = 'id'
    let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
    let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.DATABASE._data.users).length
    let tags = {
      'main': 'MAIN MENU',
      'xp': 'LIMIT MENU',
      'sticker': 'STICKER MENU',
      'kerang': 'KERANG MENU',
      'quotes': 'QUOTES MENU',
      'admin': 'ADMIN MENU',
      'group': 'GROUP MENU',
      'internet': 'INTERNET MENU',
      'downloader': 'DOWNLOADER MENU',
      'tools': 'OTHER MENU',
      'fun': 'FUN MENU',
      'jadibot': 'JADI BOT',
      'owner': 'OWNER MENU',
      'host': 'HOST MENU',
      'advanced': 'ADVANCED MENU',
      'info': 'INGFO MENU',
      '': 'NO CATEGORY',
    }
    for (let plugin of Object.values(global.plugins))
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!tag in  tags) tags[tag] = tag
    let help = Object.values(global.plugins).map(plugin => {
      return {
        help: plugin.help,
        tags: plugin.tags,
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit
      }
    })
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let menu of help)
        if (menu.tags && menu.tags.includes(tag))
          if (menu.help) groups[tag].push(menu)
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || `
◪ INFO USER
 │
 ❏ Nama : %name
 ❏ Exp : %exp*
 ❏ Limit : %limit*
 │
◪ Info BOT
 │
 ❏ Tanggal :
   %week %weton, %date
 ❏ Waktu :
   %time
 ❏ runtime :
   %uptime
 ❏ uptime :
   %muptime
 ❏ Total user :
   %totalreg user
 ❏ Prefix = Z
 ❏ Owner = Fajar dan Nabil
 │
 │
 ❏ Z BOT :
   wa.me/6283820666907
 ❏ Z BOT v2 :
   wa.me/6281990498472
 │
◪ NOTE :
  Ingat ApiKey yang digunakan
  Z BOT itu adalah bayar dan VPS
  Yang Digunakan ZBOT itu bayar
  Maka Tolong bantuannya buat
  Z BOT Jika BOT sedang kehabisan
  ApiKey dan VPS mati tolong
  donasinya
 │
 │
◪ Jika ingin ikut event menarik
  Bisa masuk grup Official Z BOT
  Ketik Zgroup untuk menampilkan
  Link grup Z BOT
 │
◪ Z BOT v3
%readmore`
    let header = conn.menu.header || '◪ %category \n  │'
    let body   = conn.menu.body   || '  ❏ %cmd%islimit'
    let footer = conn.menu.footer || `  │\n`
    let after  = conn.menu.after  || 'Z BOT v3'
    let _text  = before + '\n'
    for (let tag in groups) {
      _text += header.replace(/%category/g, tags[tag]) + '\n'
      for (let menu of groups[tag]) {
        for (let help of menu.help)
          _text += body.replace(/%cmd/g, menu.prefix ? help : '%p' + help).replace(/%islimit/g, menu.limit ? ' (Limit)' : '')  + '\n'
      }
      _text += footer
    }
    _text += after
    text =  typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      exp, limit, name, weton, week, date, time, totalreg,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).join`|`})`, 'g'), (_, name) => replace[name])
    conn.reply(m.chat, text.trim(), m)
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu','help','?']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
