let fetch = require('node-fetch')
let fetchJson = (url, options) => new Promise(async (resolve, reject) => {
    fetch(url, options)
        .then(response => response.json())
        .then(json => {
            // console.log(json)
            resolve(json)
        })
        .catch((err) => {
            reject(err)
        })
})
let limit = 30
let handler = async function (m, { text, isPrems, isOwner }) {
  if (!text) throw 'Gaada yang dicari :v'
  let anu = await fetchJson(`https://api.vhtear.com/ytmp3?query=${text}&apikey=Ahmad123`)
  let s = Number(anu.result.size)
  s = /MB/.test(anu.result.size) ? s * 1024 : s
  let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < s
  this.sendFile(m.chat, anu.result.image, 'thumbnail.jpg', `
*「 PLAY MUSIC 」*

*Title:* ${anu.result.title}
*Filesize:* ${anu.result.size}
*duration:* ${anu.result.duration}
*Link:* ${anu.result.mp3}
*Url:* ${anu.result.url}
*id:* ${anu.result.id}

*Musik sedang dikirim*
_Gak bakalan lama kok, gak kaya nungguin dia_
`.trim(), m)
  if (!isLimit) this.sendFile(m.chat, anu.result.mp3, 'audio.mp3', `Done`.trim(), m)
}
handler.help = ['playmp3 <pencarian>']
handler.tags = ['downloader']
handler.command = /^play$/i

handler.exp = 0

module.exports = handler

