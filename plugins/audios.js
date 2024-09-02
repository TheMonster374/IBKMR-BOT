import { sticker } from '../lib/sticker.js'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'

var handler = m => m
handler.all = async function (m, {conm}) {

const chat = global.db.data.chats[m.chat]

    
    let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

    if (/^hola$/i.test(m.text) && !chat.isBanned) {
if (!db.data.chats[m.chat].audios) return
let vn = "https://qu.ax/HPeS.mp3"
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
 }      
    
if (!chat.isBanned && m.text.match(/(anadieleimporta|a nadie le importa)/gi)) {

if (!db.data.chats[m.chat].audios) return

let vn = 'https://qu.ax/JocM.mp3'

conn.sendPresenceUpdate('recording', m.chat)

conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})

}

if (!chat.isBanned && m.text.match(/(AUUGH)/gi)) {

if (!db.data.chats[m.chat].audios) return

let vn = './storagemp3/AAAAAAUGHHHH.mp3';

conn.sendPresenceUpdate('recording', m.chat)

conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(Ah)/gi)) {

if (!db.data.chats[m.chat].audios) return

let vn = './storagemp3/Ah.mp3'

conn.sendPresenceUpdate('recording', m.chat)

conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(Bruh)/gi)) {

if (!db.data.chats[m.chat].audios) return

let vn = './storagemp3/BRUH.mp3'

conn.sendPresenceUpdate('recording', m.chat)

conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(Chad|GigaChad)/gi)) {

if (!db.data.chats[m.chat].audios) return

let vn = './storagemp3/Chad.mp3'

conn.sendPresenceUpdate('recording', m.chat)

conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(Chino|China)/gi)) {

if (!db.data.chats[m.chat].audios) return

let vn = './storagemp3/ChineseSong.mp3'
let vn2 = './storagemp3/Chino.mp3'

conn.sendPresenceUpdate('recording', m.chat)

conn.sendMessage(m.chat, {audio: {url: [vn,vn2].getRandom()}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(Como|Que|Por que)/gi)) {

if (!db.data.chats[m.chat].audios) return

let vn = './storagemp3/Como.mp3'
let vn2 = './storagemp3/Como.mp3'
conn.sendPresenceUpdate('recording', m.chat)

conn.sendMessage(m.chat, {audio: {url: [vn,vn2].getRandom()}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(Eh)/gi)) {

if (!db.data.chats[m.chat].audios) return

let vn = './storagemp3/Eh.mp3'

conn.sendPresenceUpdate('recording', m.chat)

conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(Elsa pato|Elsa Pato|Pato|Elsa|Zapato)/gi)) {

if (!db.data.chats[m.chat].audios) return

let vn = './storagemp3/Elsapato.mp3'

conn.sendPresenceUpdate('recording', m.chat)

conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}
  
if (!chat.isBanned && m.text.match(/(FBI|Policia)/gi)) {

if (!db.data.chats[m.chat].audios) return

let vn = './storagemp3/FBI.mp3'

conn.sendPresenceUpdate('recording', m.chat)

conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(Gay|Gei|Maricon|Marica|Mk)/gi)) {

if (!db.data.chats[m.chat].audios) return

let vn = './storagemp3/gay2.mp3'
let vn2 = './storagemp3/Maricon.mp3'

conn.sendPresenceUpdate('recording', m.chat)

conn.sendMessage(m.chat, {audio: {url: [vn,vn2].getRandom()}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(Gemido|Gemir|Sexo)/gi)) {

if (!db.data.chats[m.chat].audios) return

let vn = './storagemp3/GemidoRmx.mp3'

conn.sendPresenceUpdate('recording', m.chat)

conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(Puto|Puta|Hijo de puta|Sorra|Zorra|Hija de puta|Perra|Hijo de perra|Hija de perra)/gi)) {

if (!db.data.chats[m.chat].audios) return

let vn = './storagemp3/Hijodeputa.mp3'

conn.sendPresenceUpdate('recording', m.chat)

conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(Kawai|Lindo|Linda|Cute|Hermoso|Hermosa)/gi)) {

if (!db.data.chats[m.chat].audios) return

let vn = './storagemp3/Kawai.mp3'

conn.sendPresenceUpdate('recording', m.chat)

conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(Loligod|LoliGod|Loli)/gi)) {

if (!db.data.chats[m.chat].audios) return

let vn = './storagemp3/LoliGod.mp3'

conn.sendPresenceUpdate('recording', m.chat)

conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(Masturbar|Masturbacion|Paja|Pajas|Ganso|Jalar|Jalarsela)/gi)) {

if (!db.data.chats[m.chat].audios) return

let vn = './storagemp3/Masturbar.mp3'

conn.sendPresenceUpdate('recording', m.chat)

conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(Moka|Chan|Moka Chan)/gi)) {

if (!db.data.chats[m.chat].audios) return

let vn = './storagemp3/MokaChan.mp3'

conn.sendPresenceUpdate('recording', m.chat)

conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(Ohayou|Buenos dias|Buenas)/gi)) { 

if (!db.data.chats[m.chat].audios) return

let vn = './storagemp3/Ohayou.mp3'

conn.sendPresenceUpdate('recording', m.chat)

conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(Ohio)/gi)) { 

if (!db.data.chats[m.chat].audios) return

let vn = './storagemp3/Ohio.mp3'

conn.sendPresenceUpdate('recording', m.chat)

conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(Or or or|Freddy Fazbear|Freddy fazbear|Freddy|Fazbear|Five nights at freddys|Five Nights At Freddys|Fnaf)/gi)) { 

if (!db.data.chats[m.chat].audios) return

let vn = './storagemp3/Freddy.mp3'

conn.sendPresenceUpdate('recording', m.chat)

conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(Pito|Pene|Verga)/gi)) { 

if (!db.data.chats[m.chat].audios) return

let vn = './storagemp3/Pito.mp3'

conn.sendPresenceUpdate('recording', m.chat)

conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(Peru|Peruano|Pe|Pony|Cumear|Cumeado)/gi)) { 

if (!db.data.chats[m.chat].audios) return

let vn = './storagemp3/Peruano.mp3'

conn.sendPresenceUpdate('recording', m.chat)

conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(Smurfcat|SmurfCat|Smurf|Pitufo gato|Pitufo Gato|We lie|We love|We live|Alan Walker)/gi)) { 

if (!db.data.chats[m.chat].audios) return

let vn = './storagemp3/Smurfcat.mp3'

conn.sendPresenceUpdate('recording', m.chat)

conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(Triste|Llora|Llorando|Sad|Cry|Tristeza|Mal)/gi)) { 

if (!db.data.chats[m.chat].audios) return

let vn = './storagemp3/Triste.mp3'

conn.sendPresenceUpdate('recording', m.chat)

conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(Whistle|Silbido|Josh Hutcherson|Josh|Hutcherson)/gi)) { 

if (!db.data.chats[m.chat].audios) return

let vn = './storagemp3/Whistle.mp3'

conn.sendPresenceUpdate('recording', m.chat)

conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(Wow|WOW|Sorprendente|Sorpresa|Increible|Genial)/gi)) { 

if (!db.data.chats[m.chat].audios) return

let vn = './storagemp3/WOW.mp3'

conn.sendPresenceUpdate('recording', m.chat)

conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(Y el chiste master|Y el chiste master?|Y el chiste master¿|Y el chiste master¿¿¿|Y el chiste master???|Chiste|Chiste malo)/gi)) { 

if (!db.data.chats[m.chat].audios) return

let vn = './storagemp3/YElChisteMaster.mp3'

conn.sendPresenceUpdate('recording', m.chat)

conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}
  
if (!chat.isBanned && m.text.match(/(araara|ara ara)/gi)) { 

if (!db.data.chats[m.chat].audios) return

let vn = 'https://qu.ax/PPgt.mp3'

conn.sendPresenceUpdate('recording', m.chat)

conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}
if (!chat.isBanned && m.text.match(/(un Pato| un pato|un pato que va caminando alegremente|Un pato|Un Pato)/gi)) {
if (!db.data.chats[m.chat].audios) return
let vn = 'https://qu.ax/pmOm.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(UwU|uwu|Uwu|uwU|UWU)/gi)) {
if (!db.data.chats[m.chat].audios) return
let vn = 'https://qu.ax/lOCR.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(vetealavrg|vete a la vrg|vete a la verga)/gi)) {
if (!db.data.chats[m.chat].audios) return
let vn = 'https://qu.ax/pXts.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}
 
if (!chat.isBanned && m.text.match(/(fiesta viernes|viernes|Viernes|viernes fiesta)/gi)) {
if (!db.data.chats[m.chat].audios) return
let vn = 'https://qu.ax/wqXs.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(vivan!!|vivan los novios|vivanlosnovios)/gi)) {
if (!db.data.chats[m.chat].audios) return
let vn = 'https://qu.ax/vHX.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(Yamete|yamete|Yamete kudasai|yamete kudasai)/gi)) {
if (!db.data.chats[m.chat].audios) return
let vn = 'https://qu.ax/thgS.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(epico|esto va a ser epico)/gi)) {
if (!db.data.chats[m.chat].audios) return
const vn = 'https://qu.ax/pjTx.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})
}

if (!chat.isBanned && m.text.match(/(shitpost)/gi)) {
if (!db.data.chats[m.chat].audios) return
let vn = 'https://qu.ax/Bdn.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fkontak})

    
 }
return !0 
}
    
    



export default handler

