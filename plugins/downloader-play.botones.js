import fetch from "node-fetch";

import axios from 'axios';
import yts from 'yt-search';
import {youtubedl, youtubedlv2} from '@bochilteam/scraper';
import ytdl from 'ytdl-core';
import {bestFormat, getUrlDl} from '../lib/y2dl.js';
import YTDL from "../lib/ytdll.js";
import fs from "fs";
let limit1 = 100;
let limit2 = 400;
let limit_a1 = 50;
let limit_a2 = 400;


const handler = async (m, {conn, command, args, text, usedPrefix}) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }


    
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];


let user = global.db.data.users[who]
    if (!(who in global.db.data.users)) throw `✳️ El usuario no se encuentra en mi base de datos`

if (!text) throw '*_Ingresa el nombre de una cancion_*\n\n`Ejemplo:`\n\n> .play Longtrail Inabakumori'

let limit = 70;
let ytse = await yts(text);
let vid = ytse.all.find(v => v.type === "video");
let q = '128kbps'
let v = vid.url
let yt = await (async () => {
try {
return await youtubedl(v)
} catch {
return await youtubedlv2(v)
}
})()
let dl_url = await yt.audio[q].download()
let [ttl, size] = await Promise.all([
yt.title,
yt.audio[q].fileSizeH,
])
/*let shortURL = await getTinyURL(v);*/
let play = `*‣* *Nombre:* *${vid.title}*
`.trim()
      let name = await conn.getName(who)

let play2 = `┏━⊜「 *=͟͟͞PLAY 🎵/📽️* 」
┃
┃ Hola, *_${name}_*
┃
┃ Elige una de las dos opciones
┃ para descargar, bien sea en
┃ formato de *🎵 Audio* o
┃ *📽️ Video*
┗━━━━━━━━━━━━━⬣`





/*conn.sendFile(m.chat, vid.thumbnail, '', play, m)

let thumbnailBuffer = await axios.get("https://telegra.ph/file/8f3ca5a8841f26959aa69.jpg", { responseType: 'arraybuffer' })
let buffer = await getBuffer(dl_url)
let bufferSize = buffer.byteLength
let contextInfo = {
forwardingScore: 99999,
isForwarded: false,
externalAdReply: {
showAdAttribution: true,
title: vid.title,
body: null,
mediaType: 2,
sourceUrl: 'https://atom.bio/tm',
thumbnail: Buffer.from(thumbnailBuffer.data),
}}    */


 /*let menu = `
🤤👅🥵 *𝐀𝐂𝐀𝐁𝐀𝐒 𝐃𝐄 𝐅𝐎𝐋𝐋𝐀𝐑𝐓𝐄𝐋@!*🥵👅🤤

*𝙏𝙚 𝙖𝙘𝙖𝙗𝙖𝙨 𝙙𝙚 𝙛𝙤𝙡𝙡𝙖𝙧 𝙖 𝙡𝙖 𝙥𝙚𝙧𝙧𝙖 𝙙𝙚* *${text}* ⁩ *𝙖 𝟰 𝙥𝙖𝙩𝙖𝙨 𝙢𝙞𝙚𝙣𝙩𝙧𝙖𝙨 𝙩𝙚 𝙜𝙚𝙢𝙞𝙖 𝙘𝙤𝙢𝙤 𝙪𝙣𝙖 𝙢𝙖𝙡𝙙𝙞𝙩𝙖 𝙥𝙚𝙧𝙧𝙖 "𝐀𝐚𝐚𝐡.., 𝐀𝐚𝐚𝐡𝐡, 𝐬𝐢𝐠𝐮𝐞, 𝐧𝐨 𝐩𝐚𝐫𝐞𝐬, 𝐧𝐨 𝐩𝐚𝐫𝐞𝐬.." 𝙮 𝙡𝙖 𝙝𝙖𝙨 𝙙𝙚𝙟𝙖𝙙𝙤 𝙩𝙖𝙣 𝙧𝙚𝙫𝙚𝙣𝙩𝙖𝙙𝙖 𝙦𝙪𝙚 𝙣𝙤 𝙥𝙪𝙚𝙙𝙚 𝙨𝙤𝙨𝙩𝙚𝙣𝙚𝙧 𝙣𝙞 𝙨𝙪 𝙥𝙧𝙤𝙥𝙞𝙤 𝙘𝙪𝙚𝙧𝙥𝙤 𝙡𝙖 𝙢𝙖𝙡𝙙𝙞𝙩𝙖 𝙯𝙤𝙧𝙧𝙖!*

*${text}*
🤤🥵 *¡𝐘𝐀 𝐓𝐄 𝐇𝐀𝐍 𝐅𝐎𝐋𝐋𝐀𝐃𝐎!* 🥵🤤
*/



 await conn.sendFile(m.chat, vid.thumbnail, '', play, m)

let thumbnailBuffer = await axios.get("https://telegra.ph/file/8f3ca5a8841f26959aa69.jpg", { responseType: 'arraybuffer' })
let buffer = await getBuffer(dl_url)
let bufferSize = buffer.byteLength
let contextInfo = {
forwardingScore: 99999,
isForwarded: false,
externalAdReply: {
showAdAttribution: true,
title: vid.title,
body: null,
mediaType: 2,
sourceUrl: 'https://atom.bio/tm',
thumbnail: Buffer.from(thumbnailBuffer.data),
}}    
       




    const buttonParamsJson = JSON.stringify({

title: "🎵 AUDIO/ 📽️ VIDEO",

description: "Lista de todos los menus de INABAKUMORI-BOT 🤍",

sections: [

    { title: "🔽 Formatos de descarga", highlight_label: "Popular",

rows: [

{ header: "🎵 AUDIO", title: `${vid.title}`, description: "🎵 Mp3", id: usedPrefix + `play ${text}` },

{ header: "📽️ VIDEO", title: `${vid.title}`, description: "📽️ Mp4", id: usedPrefix + `play2 ${text}` }


]}
]})

const interactiveMessage = {

body: { text: play2 },

footer: { text: `Si no funciona, escriba .play o .play2\n\n` + wm + `\nBy Monster` },

header: { title: null

, hasMediaAttachment: false },

nativeFlowMessage: { buttons: [{ 

name: "single_select",

buttonParamsJson

}]

}}

const message = { messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 }, interactiveMessage }

await conn.relayMessage(m.chat, { viewOnceMessage: { message } }, {})

    if (m.isGroup) {
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
        
        
    conn.sendMessage(m.chat, fkontak, play2, 
{contextInfo: {
externalAdReply: {
title: `🤍 Unete al grupo OFC`,
body: user.name,
thumbnailUrl: 'https://imgur.com/o9NvkcL.jpeg', 
sourceUrl: 'https://chat.whatsapp.com/Jql7XsV7V179fvOmKnEftc',
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}}, { quoted: fkontak },
 {quoted: m});
    }
   conn.sendMessage(m.chat, play2, fkontak, 
{contextInfo: {
externalAdReply: {
title: `🤍 Unete al grupo OFC`,
body: user.name,
thumbnailUrl: 'https://imgur.com/o9NvkcL.jpeg', 
sourceUrl: 'https://chat.whatsapp.com/Jql7XsV7V179fvOmKnEftc',
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}}, { quoted: fkontak })
};
        
/*m.reply(menu, null, { mentions: conn.parseMention(menu) })}*/

handler.help = ['play5'].map((v) => v + ' <canción>')
handler.tags = ['downloader']
handler.command =/^(play5)/i
handler.fail = null
handler.register = true
export default handler
