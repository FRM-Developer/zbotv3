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
let handler = async function (m, { text, isPrems, isOwner }) {
  if (!text) throw 'Gaada yang dicari :v'
  let gugel = text
  let ggl = gugel.split("|")[0];
  let ggl2 = gugel.split("|")[1];
  let ggl3 = gugel.split("|")[2];
  let anu = await fetchJson(`https://videfikri.com/api/textmaker/gsuggest/?text1=${ggl}&text2=${ggl2}&text3=${ggl3}`)
  conn.reply(m.chat, `_Gak bakalan lama kok, gak kaya nungguin dia_`, m)
  conn.sendFile(m.chat, anu.result.img, 'google.jpg', `Done`.trim(), m)
}
handler.command = /^googletext$/i

handler.exp = 0

module.exports = handler
