//creditos a ALS, grande wn ;)

const handler = async (m, {conn}) => {
 const vn = './storagemp3/gay2.mp3';
  const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  await conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/gay', {
    avatar: await conn.profilePictureUrl(who, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
  }), 'error.png', '*🏳️‍🌈 𝑴𝒊𝒓𝒆n 𝒂 𝒆𝒔𝒕𝒆 𝒈𝒂𝒚 𝒍𝒆 𝒈𝒖𝒔𝒕𝒂 𝒍𝒂 𝒑𝒊𝒋𝒂! 🏳️‍🌈*', m);
  await conn.sendMessage(m.chat, {audio: {url: vn}, fileName: `error.mp3`, mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
};

handler.help = ['gay'].map((v) => v + ' <@user>')
handler.tags = ['fun']
handler.command = /^(gay)$/i
handler.fail = null
handler.register = true
export default handler


/*
let handler = async (m, { conn }) => {
let vn = './storagemp3/gay2.mp3'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/gay', {  
avatar: await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),   
}), 'error.png', `*🏳️‍🌈 𝑴𝒊𝒓𝒆 𝒂 𝒆𝒔𝒕𝒆 𝒈𝒂𝒚 𝒍𝒆 𝒈𝒖𝒔𝒕𝒂 𝒍𝒂 𝒑𝒊𝒋𝒂! 🏳️‍🌈*`, m)   
await await await conn.sendFile(m.chat, vn, 'error.mp3', null, m, true, { 
type: 'audioMessage', 
ptt: true })
}
handler.help = ['gay']
handler.tags = ['maker']
handler.command = /^(gay)$/i
export default handler
*/
