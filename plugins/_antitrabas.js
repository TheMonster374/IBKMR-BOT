//By @NeKosmic || https://github.com/NeKosmic/
import * as fs from 'fs'
export async function before(m, { conn, isAdmin, isBotAdmin, text, participants, usedPrefix }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `*» ${i + 1}. @${v.id.split('@')[0]}*`).join('\n')
let chat = global.db.data.chats[m.chat]
let bot = global.db.data.settings[this.user.jid] || {}
let delet = m.key.participant
let bang = m.key.id
let name = await conn.getName(m.sender)
let fakemek = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "51995386439-1616969743@g.us","inviteCode": "m","groupName": "P", "caption": 'Jotchua-Mini', 'jpegThumbnail': null}}}
if (chat.antiTraba && m.text.length > 4000) { //Cantidad máxima de caracteres aceptados en un mensaje//
if (isAdmin) return conn.sendMessage(m.chat, { text: `El administrador @${m.sender.split("@")[0]} acaba de enviar un texto que contiene muchos caracteres -.-!`, mentions: [m.sender] }, { quoted: fakemek, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
if (!isBotAdmin) return conn.sendMessage(m.chat, {text: `*!  Se detecto un mensaje que contiene muchos caracteres [ ! ]*\n` + `\n${listAdmin}\n\ndebo ser admin para eliminarlo`, mentions: [...groupAdmins.map(v => v.id)] }, {quoted: fakemek})
//await conn.sendButton(m.chat, `*[ ! ] Se detecto un mensaje que contiene muchos caracteres [ ! ]*\n`, `${isBotAdmin ? '' : 'No soy administrador, no puedo hacer nada :/'}`, author, ['[ ᴅᴇsᴀᴄᴛɪᴠᴀ ᴀɴᴛɪᴛʀᴀʙᴀ ]', usedPrefix+'apagar antitraba'], fakemek )
if (isBotAdmin) {
conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
setTimeout(() => { 
conn.sendMessage(m.chat, { text: `Marcar el chat como leido ✓\n${"\n".repeat(400)}\n• El número : wa.me/${m.sender.split("@")[0]}\n• Alias : ${name}\n⚠️ Acaba de enviar un texto que contiene muchos caracteres que puede ocasionar fallos en los dispositivos`, mentions: [m.sender] }, { quoted: fakemek, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}, 0)
setTimeout(() => {
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}, 1000)
}}
return !0
} 
