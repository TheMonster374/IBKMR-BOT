let handler = async (m, { conn, text, args, participants, usedPrefix, command }) => {	
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let a = []
let b = text.split('|')

if (!b[0]) return conn.reply(m.chat, `𝙐𝙎𝙀 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝘿𝙀 𝙇𝘼 𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 𝙁𝙊𝙍𝙈𝘼\n*${usedPrefix + command} Motivo de Encuesta|texto1|texto2|texto3....*\n\n`, fkontak, m) 
if (!b[1]) return conn.reply(m.chat, `𝙋𝘼𝙍𝘼 𝘾𝙍𝙀𝘼𝙍 𝙊𝙋𝘾𝙄𝙊𝙉𝙀𝙎 𝙀𝙉 𝙇𝘼 𝙀𝙉𝘾𝙐𝙀𝙎𝙏𝘼 𝙐𝙎𝙀 *" | "*\n*${usedPrefix + command} Motivo de Encuesta|texto1|texto2|texto3....*\n\n`, fkontak, m)
if (b[13]) return conn.reply(m.chat, `𝙈𝘼𝙓𝙄𝙈𝙊 *12* 𝙊𝙋𝘾𝙄𝙊𝙉𝙀𝙎!!\n\n𝙐𝙎𝙀 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝘿𝙀 𝙇𝘼 𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 𝙁𝙊𝙍𝙈𝘼\n*${usedPrefix + command} Motivo de Encuesta|texto1|texto2|texto3....*`, fkontak, m)

for (let c = 1; c < b.length; c++) { a.push([b[c]]) }
let texto = `bienvenido a mi menu*\n*${text.split('|')[0]}*`

return conn.sendPoll(m.chat, texto, a, {mentions: m})}
handler.command = ['poll', 'encuesta', 'crearencuesta', 'startpoll', 'encuestas', 'polls'] 
export default handler
