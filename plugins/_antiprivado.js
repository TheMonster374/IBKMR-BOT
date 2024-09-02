export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner}) {
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;
  if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('serbot') || m.text.includes('code')
|| m.text.includes('s')  || m.text.includes('requisitos')  || m.text.includes('owner')  || m.text.includes('stop')
|| m.text.includes('jadibot')) return !0;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  if (bot.antiPrivate && !isOwner && !isROwner) {
    await m.reply(`*_Hola, la funcion antiprivado esta activada por lo que se te bloqueará, puedes unirte al grupo ofc d ibkmr para usar sus comandos:_* 

ꕥ》 𝙄𝙉𝘼𝘽𝘼𝙆𝙐𝙈𝙊𝙍𝙄-𝘽𝙤𝙩 《ꕥ | 𝙊𝙁𝘾
https://chat.whatsapp.com/Jql7XsV7V179fvOmKnEftc
`, false, {mentions: [m.sender]});
    await this.updateBlockStatus(m.chat, 'block');
  }
  return !1;
}