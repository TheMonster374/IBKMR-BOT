import fetch from 'node-fetch'
import uploader from '../lib/uploadImage.js'

var handler = async (m, { conn, text, command, usedPrefix }) => {

let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
if (/image/g.test(mime) && !/webp/g.test(mime)) {
let buffer = await q.download()

conn.sendPresenceUpdate('composing', m.chat)

let media = await (uploader)(buffer)
let json = await (await fetch(`https://aemt.me/bardimg?url=${media}&text=${text}`)).json()

conn.sendMessage(m.chat, { text: json.result }, { quoted: m })

} else return conn.reply(m.chat, `[📚] 𝑚𝑎𝑛𝑑𝑎 𝑢𝑛𝑎 𝑖𝑚𝑎𝑔𝑒𝑛 𝑐𝑜𝑛 𝑒𝑙 𝑐𝑜𝑚𝑎𝑛𝑑𝑜 𝑦 𝑒𝑙 𝑡𝑒𝑥𝑡𝑜 𝑎 𝑏𝑢𝑠𝑐𝑎𝑟\n\n*[💡] 𝑒𝑗𝑒𝑚𝑝𝑙𝑜:*, \n!bardimg dame informacion de lo que sale en la imagen`, m)

}
handler.help = ['bardimg']
handler.tags = ['ia']
handler.command = /^(bardimg|bardimage)$/i


export default handler
