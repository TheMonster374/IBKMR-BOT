import util from 'util'
import path from 'path' 
let toM = a => '@' + a.split('@')[0]
let handler = async (m, { conn, groupMetadata, command, text, participants, usedPrefix, sender}) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
if (!db.data.chats[m.chat].game) throw `🍓 𝖤𝗌𝗍𝖾 𝖩𝗎𝖾𝗀𝗈 𝖤𝗌𝗍𝖺 𝖬𝗈𝖽𝗈 𝖮𝖿𝖿 𝖯𝗈𝗋 𝖫𝗈𝗌 𝖠𝖽𝗆𝗂𝗇𝗂𝗌𝗍𝗋𝖺𝖽𝗈𝗋𝖾𝗌, 𝖲𝗂 𝖤𝗋𝖾𝗌 𝖠𝖽𝗆𝗂𝗇 𝖴𝗌𝖺: #enable juegos` 
try {

let user = a => '@' + a.split('@')[0] //'@' + a.split('@')[0]
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b = ps.getRandom() 
let c = ps.getRandom()
let d = ps.getRandom()
let e = ps.getRandom()
let f = ps.getRandom()
let g = ps.getRandom()
let h = ps.getRandom()
let i = ps.getRandom()
let j = ps.getRandom() 


//------------------------------------------------------------------------------------

if (command == 'amistad' || command == 'amigorandom') {   
m.reply(`*🔰 Vamos a hacer algunas amistades 🔰*\n\n*Oye ${toM(a)} hablale al privado a ${toM(b)} para que jueguen y se haga una amistad 🙆*\n\n*Las mejores amistades empiezan con un juego 😉*`, null, {
mentions: [a, b]})}


//------------------------------------------------------------------------------------

if (command == 'follar' || command == 'violar') {   
if (!text) throw `*Ingrese el @ o el nombre de la persona que quieras saber si te puedes ${command.replace('how', '')}*`
let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
conn.reply(m.chat, `🤤👅🥵 *𝐀𝐂𝐀𝐁𝐀𝐒 𝐃𝐄 𝐅𝐎𝐋𝐋𝐀𝐑𝐓𝐄𝐋@!*🥵👅🤤\n\n*𝙏𝙚 𝙖𝙘𝙖𝙗𝙖𝙨 𝙙𝙚 𝙛𝙤𝙡𝙡𝙖𝙧 𝙖 𝙡𝙖 𝙥𝙚𝙧𝙧𝙖 𝙙𝙚* *${text}* ⁩ *𝙖 𝟰 𝙥𝙖𝙩𝙖𝙨 𝙢𝙞𝙚𝙣𝙩𝙧𝙖𝙨 𝙩𝙚 𝙜𝙚𝙢𝙞𝙖 𝙘𝙤𝙢𝙤 𝙪𝙣𝙖 𝙢𝙖𝙡𝙙𝙞𝙩𝙖 𝙥𝙚𝙧𝙧𝙖 "𝐀𝐚𝐚𝐡.., 𝐀𝐚𝐚𝐡𝐡, 𝐬𝐢𝐠𝐮𝐞, 𝐧𝐨 𝐩𝐚𝐫𝐞𝐬, 𝐧𝐨 𝐩𝐚𝐫𝐞𝐬.." 𝙮 𝙡𝙖 𝙝𝙖𝙨 𝙙𝙚𝙟𝙖𝙙𝙤 𝙩𝙖𝙣 𝙧𝙚𝙫𝙚𝙣𝙩𝙖𝙙𝙖 𝙦𝙪𝙚 𝙣𝙤 𝙥𝙪𝙚𝙙𝙚 𝙨𝙤𝙨𝙩𝙚𝙣𝙚𝙧 𝙣𝙞 𝙨𝙪 𝙥𝙧𝙤𝙥𝙞𝙤 𝙘𝙪𝙚𝙧𝙥𝙤 𝙡𝙖 𝙢𝙖𝙡𝙙𝙞𝙩𝙖 𝙯𝙤𝙧𝙧𝙖!*\n\n*${text}*\n🤤🥵 *¡𝐘𝐀 𝐓𝐄 𝐇𝐀𝐍 𝐅𝐎𝐋𝐋𝐀𝐃𝐎!* 🥵🤤`, { mentions: [user] })}

//------------------------------------------------------------------------------------

if (command == 'formarpareja' || command == 'formarparejas') {
m.reply(`*${toM(a)}, 𝙔𝙖 𝙚𝙨 𝙝𝙤𝙧𝙖 𝙙𝙚 𝙦𝙪𝙚 𝙩𝙚 💍 𝘾𝙖𝙨𝙚𝙨 𝙘𝙤𝙣 ${toM(b)}, 𝙇𝙞𝙣𝙙𝙖 𝙋𝙖𝙧𝙚𝙟𝙖 😉💓*`, null, {
mentions: [a, b]})}

//------------------------------------------------------------------------------------

if (command == 'personalidad') {
if (!text) return conn.reply(m.chat, 'Ingrese un nombre?', m)
let personalidad = `┏━━°❀❬ *PERSONALIDAD}* ❭❀°━━┓
*┃*
*┃• Nombre* : ${text}
*┃• Buena Moral* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
*┃• Mala Moral* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
*┃• Tipo de persona* : ${pickRandom(['De buen corazón','Arrogante','Tacaño','Generoso','Humilde','Tímido','Cobarde','Entrometido','Cristal','No binarie XD', 'Pendejo'])}
*┃• Siempre* : ${pickRandom(['Pesado','De malas','Distraido','De molestoso','Chismoso','Pasa jalandosela','De compras','Viendo anime','Chatea en WhatsApp porque esta soltero','Acostado bueno para nada','De mujeriego','En el celular'])}
*┃• Inteligencia* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
*┃• Morosidad* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
*┃• Coraje* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
*┃• Miedo* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
*┃• Fama* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
*┃• Género* : ${pickRandom(['Hombre', 'Mujer', 'Homosexual', 'Bisexual', 'Pansexual', 'Feminista', 'Heterosexual', 'Macho alfa', 'Mujerzona', 'Marimacha', 'Palosexual', 'PlayStationSexual', 'Sr. Manuela', 'Pollosexual'])}
┗━━━━━━━━━━━━━━━━`
conn.reply(m.chat, personalidad, m, { mentions: conn.parseMention(personalidad) })
}   

//------------------------------------------------------------------------------------

if (command == 'ship' || command == 'shippear') {
if (!text) throw `⚠️ 𝐄𝐬𝐜𝐫𝐢𝐛𝐚 𝐞𝐥 𝐧𝐨𝐦𝐛𝐫𝐞 𝐝𝐞 𝐝𝐨𝐬 𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐬 𝐩𝐚𝐫𝐚 𝐜𝐚𝐥𝐜𝐮𝐥𝐚𝐫 𝐬𝐮𝐬 𝐚𝐦𝐨𝐫`
let [text1, ...text2] = text.split(' ')
text2 = (text2 || []).join(' ')
if (!text2) throw `⚠️ 𝐅𝐚𝐥𝐭𝐚 𝐞𝐥 𝐧𝐨𝐦𝐛𝐫𝐞 𝐝𝐞 𝐥𝐚 𝐬𝐞𝐠𝐮𝐧𝐝𝐚 𝐩𝐞𝐫𝐬𝐨𝐧𝐚`
let love = `_❤️ *${text1}* tu oportunidad de enamorarte de *${text2}* es de *${Math.floor(Math.random() * 100)}%* 👩🏻‍❤️‍👨🏻_ `.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })
}

//------------------------------------------------------------------------------------


if (command == 'ruletas' || command == 'ruleta' || command == 'suerte') {
if (!db.data.chats[m.chat].game2) throw `${lenguajeGB['smsAvisoAG']()}𝙀𝙨𝙩𝙚 𝙟𝙪𝙚𝙜𝙤𝙨 𝙚𝙨𝙩𝙖 𝙙𝙚𝙨𝙖𝙘𝙩𝙞𝙫𝙖𝙙𝙤 𝙥𝙤𝙧 𝙡𝙤𝙨 𝙖𝙙𝙢𝙞𝙣𝙨 𝙙𝙚𝙡 𝙂𝙧𝙪𝙥𝙤 𝙨𝙞 𝙩𝙪 𝙚𝙧𝙚𝙨 𝙖𝙙𝙢𝙞𝙣𝙨 𝙮 𝙦𝙪𝙞𝙚𝙧𝙚 𝙖𝙘𝙩𝙞𝙫𝙖𝙧𝙡𝙤 𝙪𝙨𝙖𝙧: #on game2` 
const date = global.db.data.users[m.sender].juegos + 10800000; //10800000 = 3 hs 
if (new Date - global.db.data.users[m.sender].juegos < 10800000) throw `『⏰』𝙀𝙨𝙥𝙚𝙧𝙖 : ${msToTime(date - new Date())} 𝙥𝙖𝙧𝙖 𝙫𝙤𝙡𝙫𝙚𝙧 𝙖 𝙟𝙪𝙜𝙖𝙧 `
if (global.db.data.users[m.sender].exp < 0 || global.db.data.users[m.sender].money < 0 || global.db.data.users[m.sender].limit < 0) return m.reply(` 𝙉𝙊 𝙏𝙄𝙀𝙉𝙀 𝙎𝙐𝙁𝙄𝘾𝙄𝙀𝙉𝙏𝙀𝙎 𝙍𝙀𝘾𝙐𝙍𝙎𝙊 🐈`)
let user = global.db.data.users[m.sender]
const prem = Math.floor(Math.random() * 3600000) 
const exp = Math.floor(Math.random() * 8500)
const diamond = Math.floor(Math.random() * 130)
const money = Math.floor(Math.random() * 8500)
let rulet = ['text', 'text2', 'text3', 'text4', 'text5', 'text6']; 
let ruleta = rulet[Math.floor(Math.random() * 6)]
global.db.data.users[m.sender].juegos = new Date * 1;
if (ruleta === 'text') return m.reply(`😺 𝙌𝙐𝙀 𝘽𝙐𝙀𝙉𝘼 𝙎𝙐𝙀𝙍𝙏𝙀 🐞🍀\n*𝙊𝙗𝙩𝙞𝙚𝙣𝙚 :* ${exp} XP`).catch(global.db.data.users[m.sender].exp += exp) 
if (ruleta === 'text2') return m.reply(`😿 𝙉𝙊𝙊 𝙀𝙎𝙏𝘼𝙎 𝘿𝙀 𝙈𝘼𝙇𝘼 𝙎𝙐𝙀𝙍𝙏𝙀 𝘼𝘾𝘼𝘽𝘼 𝘿𝙀 𝙋𝙀𝙍𝘿𝙀𝙍 : ${exp} XP`).catch(global.db.data.users[m.sender].exp -= exp) 
if (ruleta === 'text3') return conn.groupParticipantsUpdate(m.chat, [m.sender], 'demote').catch(m.reply(`😹 𝙀𝙎𝙏𝘼𝙎 𝙍𝙀 𝙈𝘼𝙇𝘼 𝙌𝙐𝙀 𝙌𝙐𝙄𝙏𝙊 𝙀𝙇 𝙋𝙊𝘿𝙀𝙍 𝘼𝙃𝙊𝙍𝘼 𝙔𝘼 𝙉𝙊 𝙀𝙍𝙀𝙎 𝘼𝘿𝙈𝙄𝙉𝙎 𝙅𝙊𝘿𝙀𝙍𝙏𝙀 😹😹😹`)) 
if (ruleta === 'text4') return conn.groupParticipantsUpdate(m.chat, [m.sender], 'promote').catch(m.reply(`😼 𝙀𝙎𝙏𝘼 𝙍𝙀 𝘽𝙐𝙀𝙉𝘼 😉, 𝘼𝙝𝙤𝙧𝙖 𝙚𝙧𝙚𝙨 𝙪𝙣 𝙖𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙙𝙤𝙧, 𝙚𝙡 𝙦𝙪𝙚 𝙦𝙪𝙞𝙩𝙖𝙧 𝙖𝙙𝙢𝙞𝙣𝙨 𝙚𝙨 𝙛𝙖𝙣 𝙙𝙚 𝙠𝙪𝙣𝙤 😂`)) 
if (ruleta === 'text5') return m.reply(`𝙒𝙐𝙐𝙐 𝙎𝙀𝙉̃𝙊𝙍 𝙀𝙎𝙏𝘼 𝘿𝙀 𝙎𝙐𝙀𝙍𝙏𝙀, 𝙑𝘼𝙔𝘼𝙍 𝘼 𝙅𝙐𝙂𝘼𝙍 𝘼𝙇 𝘾𝘼𝙎𝙄𝙉𝙊 🎰\n*𝙂𝘼𝙉𝘼𝙍𝙏𝙀 :* ${diamond} 💎`).catch(global.db.data.users[m.sender].diamond += diamond) 
if (ruleta === 'text6') return m.reply(`👑 𝙂𝙐𝘼𝘼 𝙀𝙎𝙏𝘼𝙎 𝙍𝙀 𝘽𝙐𝙀𝙉𝘼 𝙎𝙐𝙀𝙍𝙏𝙀 𝙂𝘼𝙉𝘼𝙍𝙏𝙀 𝙎𝙀𝙍 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝙋𝙊𝙍 : 1 𝙃𝙤𝙧𝙖 ⏰`).catch(global.db.data.users[m.sender].premium += prem) 
}

//------------------------------------------------------------------------------------

if (command == 'gay') {
let vn = 'https://qu.ax/HfeP.mp3'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/gay', {  
avatar: await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),   
}), 'error.png', `*🏳️‍🌈 𝑴𝒊𝒓𝒆 𝒂 𝒆𝒔𝒕𝒆 𝒈𝒂𝒚 𝒍𝒆 𝒈𝒖𝒔𝒕𝒂 𝒍𝒂 𝒑𝒊𝒋𝒂! 🏳️‍🌈*`, m)
await conn.sendFile(m.chat, vn, 'error.mp3', null, m, true, { type: 'audioMessage', ptt: true })}

//------------------------------------------------------------------------------------

if (command == 'gay2') {
if (!text) return m.reply(`🤔 𝙀𝙩𝙞𝙦𝙪𝙚𝙩𝙖𝙨 𝙖𝙡 𝙥𝙚𝙧𝙨𝙤𝙣𝙖 @𝙏𝘼𝙂 𝙤 𝙚𝙨𝙘𝙧𝙞𝙗𝙖 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚` ) 
let juego = `_*${text.toUpperCase()}* *ES/IS* *${(500).getRandom()}%* *GAY*_ 🏳️‍🌈`.trim()
await conn.reply(m.chat, juego, m, m.mentionedJid ? { mentions: m.mentionedJid } : {})}

//------------------------------------------------------------------------------------

if (command == 'lesbiana') { 
if (!text) return m.reply(`🤔 𝙀𝙩𝙞𝙦𝙪𝙚𝙩𝙖𝙨 𝙖𝙡 𝙥𝙚𝙧𝙨𝙤𝙣𝙖 @𝙏𝘼𝙂 𝙤 𝙚𝙨𝙘𝙧𝙞𝙗𝙖 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚` ) 
let juego = `_*${text.toUpperCase()}* *ES/IS* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()}*_ 🏳️‍🌈`.trim()
await conn.reply(m.chat, juego, m, m.mentionedJid ? { mentions: m.mentionedJid } : {})}

//------------------------------------------------------------------------------------

if (command == 'pajero') {
if (!text) return m.reply(`🤔 𝙀𝙩𝙞𝙦𝙪𝙚𝙩𝙖𝙨 𝙖𝙡 𝙥𝙚𝙧𝙨𝙤𝙣𝙖 @𝙏𝘼𝙂 𝙤 𝙚𝙨𝙘𝙧𝙞𝙗𝙖 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚` ) 
let juego = `_*${text.toUpperCase()}* *ES/IS* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()}*_ 😏💦`.trim()
await conn.reply(m.chat, juego, m, m.mentionedJid ? { mentions: m.mentionedJid } : {})}

//------------------------------------------------------------------------------------

if (command == 'pajera') {
if (!text) return m.reply(`🤔 𝙀𝙩𝙞𝙦𝙪𝙚𝙩𝙖𝙨 𝙖𝙡 𝙥𝙚𝙧𝙨𝙤𝙣𝙖 @𝙏𝘼𝙂 𝙤 𝙚𝙨𝙘𝙧𝙞𝙗𝙖 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚` ) 
let juego = `_*${text.toUpperCase()}* *ES/IS* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()}*_ 😏💦`.trim()
await conn.reply(m.chat, juego, m, m.mentionedJid ? { mentions: m.mentionedJid } : {})}

//------------------------------------------------------------------------------------

if (command == 'puto') {
if (!text) return m.reply(`🤔 𝙀𝙩𝙞𝙦𝙪𝙚𝙩𝙖𝙨 𝙖𝙡 𝙥𝙚𝙧𝙨𝙤𝙣𝙖 @𝙏𝘼𝙂 𝙤 𝙚𝙨𝙘𝙧𝙞𝙗𝙖 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚` ) 
let juego = `_*${text.toUpperCase()}* *ES/IS* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()},* *MÁS INFORMACIÓN A SU PRIVADO 🔥🥵 XD*_`.trim()
await conn.reply(m.chat, juego, m, m.mentionedJid ? { mentions: m.mentionedJid } : {})}

//------------------------------------------------------------------------------------

if (command == 'puta') {
if (!text) return m.reply(`🤔 𝙀𝙩𝙞𝙦𝙪𝙚𝙩𝙖𝙨 𝙖𝙡 𝙥𝙚𝙧𝙨𝙤𝙣𝙖 @𝙏𝘼𝙂 𝙤 𝙚𝙨𝙘𝙧𝙞𝙗𝙖 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚` ) 
let juego = `_*${text.toUpperCase()}* *ES/IS* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()},* *MÁS INFORMACIÓN A SU PRIVADO 🔥🥵 XD*_`.trim()
await conn.reply(m.chat, juego, m, m.mentionedJid ? { mentions: m.mentionedJid } : {})}

//------------------------------------------------------------------------------------

if (command == 'manco') {
if (!text) return m.reply(`🤔 𝙀𝙩𝙞𝙦𝙪𝙚𝙩𝙖𝙨 𝙖𝙡 𝙥𝙚𝙧𝙨𝙤𝙣𝙖 @𝙏𝘼𝙂 𝙤 𝙚𝙨𝙘𝙧𝙞𝙗𝙖 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚` ) 
let juego = `_*${text.toUpperCase()}* *ES/IS* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()} 💩*_`.trim()
await conn.reply(m.chat, juego, m, m.mentionedJid ? { mentions: m.mentionedJid } : {})}

//------------------------------------------------------------------------------------ 

if (command == 'manca') {
if (!text) return m.reply(`🤔 𝙀𝙩𝙞𝙦𝙪𝙚𝙩𝙖𝙨 𝙖𝙡 𝙥𝙚𝙧𝙨𝙤𝙣𝙖 @𝙏𝘼𝙂 𝙤 𝙚𝙨𝙘𝙧𝙞𝙗𝙖 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚` ) 
let juego = `_*${text.toUpperCase()}* *ES* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()} 💩*_`.trim()
await conn.reply(m.chat, juego, m, m.mentionedJid ? { mentions: m.mentionedJid } : {})}

//------------------------------------------------------------------------------------

if (command == 'rata') {
if (!text) return m.reply(`🤔 𝙀𝙩𝙞𝙦𝙪𝙚𝙩𝙖𝙨 𝙖𝙡 𝙥𝙚𝙧𝙨𝙤𝙣𝙖 @𝙏𝘼𝙂 𝙤 𝙚𝙨𝙘𝙧𝙞𝙗𝙖 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚` ) 
let juego = `_*${text.toUpperCase()}* *ES* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()} 🐁 COME QUESO 🧀*_`.trim()
await conn.reply(m.chat, juego, m, m.mentionedJid ? { mentions: m.mentionedJid } : {})}

//------------------------------------------------------------------------------------ 

if (command == 'prostituto') {
if (!text) return m.reply(`🤔 𝙀𝙩𝙞𝙦𝙪𝙚𝙩𝙖𝙨 𝙖𝙡 𝙥𝙚𝙧𝙨𝙤𝙣𝙖 @𝙏𝘼𝙂 𝙤 𝙚𝙨𝙘𝙧𝙞𝙗𝙖 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚` ) 
let juego = `_*${text.toUpperCase()}* *ES* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()} 🫦👅, QUIEN QUIERE DE SUS SERVICIOS? XD*_`.trim()
await conn.reply(m.chat, juego, m, m.mentionedJid ? { mentions: m.mentionedJid } : {})}

//------------------------------------------------------------------------------------  

if (command == 'prostituta') {
if (!text) return m.reply(`🤔 𝙀𝙩𝙞𝙦𝙪𝙚𝙩𝙖𝙨 𝙖𝙡 𝙥𝙚𝙧𝙨𝙤𝙣𝙖 @𝙏𝘼𝙂 𝙤 𝙚𝙨𝙘𝙧𝙞𝙗𝙖 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚` ) 
let juego = `_*${text.toUpperCase()}* *ES* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()} 🫦👅, QUIEN QUIERE DE SUS SERVICIOS? XD*_`.trim()
await conn.reply(m.chat, juego, m, m.mentionedJid ? { mentions: m.mentionedJid } : {})}

//------------------------------------------------------------------------------------
if (command == 'love') {
if (!text) return m.reply(`🤔 𝙀𝙩𝙞𝙦𝙪𝙚𝙩𝙖𝙨 𝙖𝙡 𝙥𝙚𝙧𝙨𝙤𝙣𝙖 @𝙏𝘼𝙂 𝙤 𝙚𝙨𝙘𝙧𝙞𝙗𝙖 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚` )  
conn.reply(m.chat, ` *❤️❤️ MEDIDOR DE AMOR ❤️❤️* 
*El amor de ${text} por ti es de* *${Math.floor(Math.random() * 100)}%* *de un 100%*
*Deberias pedirle que sea tu  novia/o ?*`.trim(), m, m.mentionedJid ? {
 mentions: m.mentionedJid
 } : {})} 

//------------------------------------------------------------------------------------    
if (command == 'top') {
if (!text) throw `Ejemplo de uso:\n.top *texto*`
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b = ps.getRandom()
let c = ps.getRandom()
let d = ps.getRandom()
let e = ps.getRandom()
let f = ps.getRandom()
let g = ps.getRandom()
let h = ps.getRandom()
let i = ps.getRandom()
let j = ps.getRandom()
let k = Math.floor(Math.random() * 70);
let x = `${pickRandom(['🤓','😅','😂','😳','😎', '🥵', '😱', '🤑', '🙄', '💩','🍑','🤨','🥴','🔥','👇🏻','😔', '👀','🌚'])}`
let l = Math.floor(Math.random() * x.length);
let top = `*${x} Top 10 ${text} ${x}*

*1. ${user(a)}*
*2. ${user(b)}*
*3. ${user(c)}*
*4. ${user(d)}*
*5. ${user(e)}*
*6. ${user(f)}*
*7. ${user(g)}*
*8. ${user(h)}*
*9. ${user(i)}*
*10. ${user(j)}*`
m.reply(top, null, { mentions: [a, b, c, d, e, f, g, h, i, j]})
}

//------------------------------------------------------------------------------------

 if (command == 'topgays') {
let vn = 'https://qu.ax/HfeP.mp3'
let top = `*🌈TOP 10 GAYS/LESBIANAS DEL GRUPO🌈*

*_1.- 🏳️‍🌈 ${user(a)}_* 🏳️‍🌈
*_2.- 🪂 ${user(b)}_* 🪂
*_3.- 🪁 ${user(c)}_* 🪁
*_4.- 🏳️‍🌈 ${user(d)}_* 🏳️‍🌈
*_5.- 🪂 ${user(e)}_* 🪂
*_6.- 🪁 ${user(f)}_* 🪁
*_7.- 🏳️‍🌈 ${user(g)}_* 🏳️‍🌈
*_8.- 🪂 ${user(h)}_* 🪂
*_9.- 🪁 ${user(i)}_* 🪁
*_10.- 🏳️‍🌈 ${user(j)}_* 🏳️‍🌈`
m.reply(top, null, { mentions: conn.parseMention(top) })
conn.sendFile(m.chat, vn, 'error.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true })}

//------------------------------------------------------------------------------------ 

if (command == 'topotakus') {
let vn = 'https://qu.ax/ZgFZ.mp3'
let top = `*🌸 TOP 10 OTAKUS DEL GRUPO 🌸*

*_1.- 💮 ${user(a)}_* 💮
*_2.- 🌷 ${user(b)}_* 🌷
*_3.- 💮 ${user(c)}_* 💮
*_4.- 🌷 ${user(d)}_* 🌷
*_5.- 💮 ${user(e)}_* 💮
*_6.- 🌷 ${user(f)}_* 🌷
*_7.- 💮 ${user(g)}_* 💮
*_8.- 🌷 ${user(h)}_* 🌷
*_9.- 💮 ${user(i)}_* 💮
*_10.- 🌷 ${user(j)}_* 🌷`
m.reply(top, null, { mentions: conn.parseMention(top) })
conn.sendFile(m.chat, vn, 'otaku.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})}

//------------------------------------------------------------------------------------

if (command == 'topintegrantes' || command == 'topintegrante') {
let top = `*_💎TOP 10 L@S MEJORES INTEGRANTES👑_*

*_1.- 💎 ${user(a)}_* 💎
*_2.- 👑 ${user(b)}_* 👑
*_3.- 💎 ${user(c)}_* 💎
*_4.- 👑 ${user(d)}_* 👑
*_5.- 💎 ${user(e)}_* 💎
*_6.- 👑 ${user(f)}_* 👑
*_7.- 💎 ${user(g)}_* 💎
*_8.- 👑 ${user(h)}_* 👑
*_9.- 💎 ${user(i)}_* 💎
*_10.- 👑 ${user(j)}_* 👑`
m.reply(top, null, { mentions: conn.parseMention(top) })}

//------------------------------------------------------------------------------------   

if (command == 'toplagrasa' || command == 'topgrasa') {
let top = `*_Uwu TOP 10 LA GRASA Uwu_* 

*_1.- Bv ${user(a)} Bv_*
*_2.- :v ${user(b)} :v_*
*_3.- :D ${user(c)} :D_*
*_4.- Owo ${user(d)} Owo_*
*_5.- U.u ${user(e)} U.u_*
*_6.- >:v ${user(f)} >:v_*
*_7.- :'v ${user(g)} :'v_*
*_8.- ._. ${user(h)} ._._*
*_9.- :V ${user(i)} :V_*
*_10.- XD ${user(j)} XD_*`
m.reply(top, null, { mentions: conn.parseMention(top) })}

//------------------------------------------------------------------------------------

if (command == 'toppanafrescos' || command == 'toppanafresco') {
let top = `*_👊TOP 10 PANAFRESCOS👊_* 

*_1.- 🤑 ${user(a)}_* 🤑
*_2.- 🤙 ${user(b)}_* 🤙
*_3.- 😎 ${user(c)}_* 😎
*_4.- 👌 ${user(d)}_* 👌
*_5.- 🧐 ${user(e)}_* 🧐
*_6.- 😃 ${user(f)}_* 😃
*_7.- 😋 ${user(g)}_* 😋
*_8.- 🤜 ${user(h)}_* 🤜
*_9.- 💪 ${user(i)}_* 💪
*_10.- 😉 ${user(j)}_* 😉`
m.reply(top, null, { mentions: conn.parseMention(top) })}

//------------------------------------------------------------------------------------

if (command == 'topshiposters' || command == 'topshipost') {
let top = `*_😱TOP 10 SHIPOSTERS DEL GRUPO😱_* 

*_1.- 😈 ${user(a)}_* 😈
*_2.- 🤙 ${user(b)}_* 🤙
*_3.- 🥶 ${user(c)}_* 🥶
*_4.- 🤑 ${user(d)}_* 🤑
*_5.- 🥵 ${user(e)}_* 🥵
*_6.- 🤝 ${user(f)}_* 🤝
*_7.- 😟 ${user(g)}_* 😟
*_8.- 😨 ${user(h)}_* 😨
*_9.- 😇 ${user(i)}_* 😇
*_10.- 🤠 ${user(j)}_* 🤠`
m.reply(top, null, { mentions: conn.parseMention(top) })}

//------------------------------------------------------------------------------------  

if (command == 'toppajer@s') {
let top = `*_😏TOP L@S MAS PAJEROS/AS DEL GRUPO💦_* 

*_1.- 🥵 ${user(a)}_* 💦
*_2.- 🥵 ${user(b)}_* 💦
*_3.- 🥵 ${user(c)}_* 💦
*_4.- 🥵 ${user(d)}_* 💦
*_5.- 🥵 ${user(e)}_* 💦
*_6.- 🥵 ${user(f)}_* 💦
*_7.- 🥵 ${user(g)}_* 💦
*_8.- 🥵 ${user(h)}_* 💦
*_9.- 🥵 ${user(i)}_* 💦
*_10.- 🥵 ${user(j)}_* 💦`
m.reply(top, null, { mentions: conn.parseMention(top) })}

//------------------------------------------------------------------------------------  

if (command == 'toplind@s' || command == 'toplindos') {
let top = `*_😳TOP L@S MAS LIND@S Y SEXIS DEL GRUPO😳_*

*_1.- ✨ ${user(a)}_* ✨
*_2.- ✨ ${user(b)}_* ✨
*_3.- ✨ ${user(c)}_* ✨
*_4.- ✨ ${user(d)}_* ✨
*_5.- ✨ ${user(e)}_* ✨
*_6.- ✨ ${user(f)}_* ✨
*_7.- ✨ ${user(g)}_* ✨
*_8.- ✨ ${user(h)}_* ✨
*_9.- ✨ ${user(i)}_* ✨
*_10.- ✨ ${user(j)}_* ✨`
m.reply(top, null, { mentions: conn.parseMention(top) })}

//------------------------------------------------------------------------------------

if (command == 'topput@s') {
let top = `*_😏TOP L@S MAS PUT@S DEL GRUPO SON🔥_* 

*_1.- 👉 ${user(a)}_* 👌
*_2.- 👉 ${user(b)}_* 👌
*_3.- 👉 ${user(c)}_* 👌
*_4.- 👉 ${user(d)}_* 👌
*_5.- 👉 ${user(e)}_* 👌
*_6.- 👉 ${user(f)}_* 👌
*_7.- 👉 ${user(g)}_* 👌
*_8.- 👉 ${user(h)}_* 👌
*_9.- 👉 ${user(i)}_* 👌
*_10.- 👉 ${user(j)}_* 👌`
m.reply(top, null, { mentions: conn.parseMention(top) })}

//------------------------------------------------------------------------------------   

if (command == 'topfamosos' || command == 'topfamos@s') {
let top = `*_🌟TOP PERSONAS FAMOSAS EN EL GRUPO🌟_* 

*_1.- 🛫 ${user(a)}_* 🛫
*_2.- 🥂 ${user(b)}_* 🥂
*_3.- 🤩 ${user(c)}_* 🤩
*_4.- 🛫 ${user(d)}_* 🛫
*_5.- 🥂 ${user(e)}_* 🥂
*_6.- 🤩 ${user(f)}_* 🤩
*_7.- 🛫 ${user(g)}_* 🛫
*_8.- 🥂 ${user(h)}_* 🥂
*_9.- 🤩 ${user(i)}_* 🤩
*_10.- 🛫 ${user(j)}_* 🛫`
m.reply(top, null, { mentions: conn.parseMention(top) })}

//------------------------------------------------------------------------------------ 

if (command == 'topparejas' || command == 'top5parejas') {
let top = `*_😍 Las 5 maravillosas parejas del grupo 😍_*

*_1.- ${user(a)} 💘 ${user(b)}_* 
Que hermosa pareja 💖, me invitan a su Boda 🛐

*_2.- ${user(c)} 💘 ${user(d)}_*  
🌹 Ustedes se merecen lo mejor del mundo 💞

*_3.- ${user(e)} 💘 ${user(f)}_* 
Tan enamorados 😍, para cuando la familia 🥰

*_4.- ${user(g)} 💘 ${user(h)}_* 
💗 Decreto que ustedes son la pareja del Año 💗 

*_5.- ${user(i)} 💘 ${user(j)}_* 
Genial! 💝, están de Luna de miel 🥵✨❤️‍🔥`
m.reply(top, null, { mentions: conn.parseMention(top) })}
} catch (e) {
await conn.reply(m.chat, `este comando no existe  ${usedPrefix + command}\n\n${wm}`, fkontak , m)
console.log(`❗❗ este comando no existe ${usedPrefix + command} ❗❗`)
console.log(e)}}
handler.help = ['love', 'gay2', 'lesbiana', 'pajero', 'pajera', 'puto', 'puta', 'manco', 'manca', 'rata', 'prostituta', 'prostituto'].map(v => v + ' @tag | nombre')
handler.tags = ['fun']
handler.command = /^love|gay2|lesbiana|pajero|pajera|puto|puta|manco|manca|rata|prostituta|prostituto|amigorandom|amistad|regalar|dar|enviar|meter|chupar|metersela|retar|formarpareja|formarparejas|gay|personalidad|pregunta|preguntas|apakah|ship|shippear|topgays|top|topputos|toplindos|toplind@s|toppajer@s|toppajeros|topshipost|topshiposters|toppanafresco|topgrasa|toppanafrescos|toplagrasa|topintegrante|topintegrantes|topotakus|topfamosos|topfamos@s|topsostero|topparejas|top5parejas|Doxxeo|doxxeo|doxxear|Doxxear|doxeo|doxear|doxxeame|doxeame|ruletas|ruleta|suerte|violar|follar/i
handler.register = true
handler.exp = 100
export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return hours + " Hora(s) " + minutes + " Minuto(s)"}

