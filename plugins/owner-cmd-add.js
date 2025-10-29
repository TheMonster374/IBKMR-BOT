const handler = async (m, {conn, text, usedPrefix, command}) => {
  global.db.data.sticker = global.db.data.sticker || {};
  if (!m.quoted) throw `${lenguajeGB['smsAvisoMG']()}𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝙀 𝘼𝙇 𝙎𝙏𝙄𝘾𝙆𝙀𝙍 𝙊 𝙄𝙈𝘼𝙂𝙀𝙉 𝘼𝙇 𝘾𝙐𝘼𝙇 𝙌𝙐𝙄𝙀𝙍𝙀 𝘼𝙂𝙍𝙀𝙂𝘼 𝙐𝙉 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝙊 𝙏𝙀𝙓𝙏𝙊`;
  if (!m.quoted.fileSha256) throw `${lenguajeGB['smsAvisoMG']()}𝙎𝙊𝙇𝙊 𝙋𝙐𝙀𝘿𝙀𝙎 𝘼𝙎𝙄𝙂𝙉𝘼𝙍 𝘾𝙊𝙈𝘼𝙉𝘿𝙊𝙎 𝙊 𝙏𝙀𝙓𝙏𝙊𝙎 𝘼 𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎 𝙀 𝙄𝙈𝘼𝙂𝙀𝙉`;
  if (!text) throw `${lenguajeGB['smsAvisoMG']()}  𝙐𝙎𝘼 𝘿𝙀 𝙀𝙎𝙏𝘼 𝙈𝘼𝙉𝙀𝙍𝘼:*\n*ღ ${usedPrefix + command} <texto> <responder a sticker o imagen>*\n\n*𝙀𝙅𝙀𝙈𝙋𝙇𝙊𝙎:*\n*ღ ${usedPrefix + command} <#menu> <responder a sticker o imagen>*`;
  const sticker = global.db.data.sticker;
  const hash = m.quoted.fileSha256.toString('base64');
  if (sticker[hash] && sticker[hash].locked) throw `${lenguajeGB['smsAvisoAG']()}𝙎𝙊𝙇𝙊 𝙈𝙄 𝙋𝙍𝙊𝙋𝙄𝙀𝙏𝘼𝙍𝙄𝙊 𝙋𝙐𝙀𝘿𝙀 𝙍𝙀𝘼𝙇𝙄𝙕𝘼𝙍 𝙀𝙎𝙏𝘼 𝙈𝙊𝘿𝙄𝙁𝙄𝘾𝘼𝘾𝙄𝙊́𝙉`;
  sticker[hash] = {text, mentionedJid: m.mentionedJid, creator: m.sender, at: + new Date, locked: false};
  m.reply(`${lenguajeGB['smsAvisoEG']()}𝙀𝙇 𝙏𝙀𝙓𝙏𝙊/𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝘼𝙎𝙄𝙂𝙉𝘼𝘿𝙊 𝘼𝙇 𝙎𝙏𝙄𝘾𝙆𝙀𝙍 𝙀 𝙄𝙈𝘼𝙂𝙀𝙉 𝙁𝙐𝙀 𝘼𝙂𝙍𝙀𝙂𝘼𝘿𝙊 𝘼 𝙇𝘼 𝘽𝘼𝙎𝙀 𝘿𝙀 𝘿𝘼𝙏𝙊𝙎 𝘾𝙊𝙍𝙍𝙀𝘾𝙏𝘼𝙈𝙀𝙉𝙏𝙀`);
};
handler.command = ['setcmd', 'addcmd', 'cmdadd', 'cmdset'];
handler.rowner = true;
export default handler;
