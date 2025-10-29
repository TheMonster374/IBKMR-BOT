import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, text}) => {
  const fkontak = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
  const who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
  const user = global.db.data.users[who];
  if (!(who in global.db.data.users)) throw `✳️ El usuario no se encuentra en mi base de datos`;
  conn.reply(m.chat, `
╭━━━〔 *𝑩𝒂𝒍𝒂𝒏𝒄𝒆 👝* 〕━━⬣
┃  𝑬𝒏 𝒔𝒖 𝑩𝒂𝒍𝒂𝒏𝒄𝒆 𝒕𝒊𝒆𝒏𝒆...
┃ *📌Nombre* : _${taguser}_
┃ *💎Diamantes* : _${user.limit}_
┃ *🪙coins* : _${user.money}_
┃ *⬆️XP* : _${user.exp}_
┃ *📍rango* : ${user.role}
┃ *📍nivel* : ${user.level}
╰━━〔 𝙄𝙉𝘼𝘽𝘼𝙆𝙐𝙈𝙊𝙍𝙄-𝘽𝙤𝙩 〕━⬣

*NOTA :* 
Puedes comprar 💎 diamantes usando los comandos
❏ *${usedPrefix}buy <cantidad>*
❏ *${usedPrefix}buyall*`, fkontak,
  {contextInfo: {
    'forwardingScore': 200,
    'isForwarded': false,
    'externalAdReply': {
      showAdAttribution: false,
      title: `GRUPO DE WHATSAPP`,
      body: `🤍 Unete al grupo OFC`,
      mediaType: 1,
      sourceUrl: 'https://chat.whatsapp.com/Jql7XsV7V179fvOmKnEftc',
      thumbnailUrl: 'https://i.imgur.com/yafZkFB.jpeg',
    }}}, {quoted: m});
};
handler.help = ['bal'];
handler.tags = ['rpg'];
handler.command = ['bal'];
export default handler;


/* import fetch from 'node-fetch'
let handler = async (m, { usedPrefix, conn}) => {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender
let name = conn.getName(who)
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let grupos = [group, group2, group3]

let enlace = { contextInfo: { externalAdReply: {title: wm + ' 🐈', body: 'support group' , sourceUrl: grupos.getRandom(), }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: 'LoliBot ', sourceUrl: yt }}}
let dos = [enlace, enlace2]

let user = global.db.data.users[who]
let premium = user.premium
const cartera = {
    economia: {
    exp: true,
    limit: true,
    money: true,
  },
}
const recursos = Object.keys(cartera.economia).map(v => user[v] && `*${global.rpgshop.emoticon(v)} ⇢ ${user[v]}*`).filter(v => v).join('\n').trim()
let cart = `╭━〔 *𝑪𝒂𝒏𝒕𝒆𝒓𝒂 👝* 〕━⬣
┃ ${name} 𝑬𝒏 𝒔𝒖 𝒄𝒂𝒓𝒕𝒆𝒓𝒂 𝒕𝒊𝒆𝒏𝒆...
┃ ${recursos}
╰━━━━〔 𝙄𝙉𝘼𝘽𝘼𝙆𝙐𝙈𝙊𝙍𝙄-𝘽𝙤𝙩 〕━━━⬣`
conn.sendMessage(m.chat, {, caption: cart, mentions: conn.parseMention(cart)}, {quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
/*await conn.sendButton(m.chat, `🎟️ 𝗣 𝗥 𝗘 𝗠 𝗜 𝗨 𝗠 ⇢ ${premium ? '✅' : '❌'}\n${wm}`, `👝 ⇢ ${name}\n` + recursos + `\n\n*PARA VER MÁS RECURSOS VISITE EL INVENTARIO*\n*TO SEE MORE RESOURCES VISIT THE INVENTORY*`, img5, [
['𝙄𝙣𝙫𝙚𝙣𝙩𝙖𝙧𝙞𝙤 | 𝙄𝙣𝙫𝙚𝙣𝙩𝙤𝙧𝙮 🎒', '/inventario'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']], m, enlace)
}
handler.help = ['bal']
handler.tags = ['xp']
handler.command = ['bal2', 'cartera', 'wallet', 'cartera2', 'balance2']
export default handler*/
