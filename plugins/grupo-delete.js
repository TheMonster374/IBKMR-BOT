const handler = async (m, {conn, usedPrefix, command}) => {
  if (!m.quoted) throw `*𝙍𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙖𝙡 𝙢𝙚𝙣𝙨𝙖𝙟𝙚 𝙦𝙪𝙚 𝙦𝙪𝙞𝙚𝙧𝙚 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙧*`;
  try {
    const delet = m.message.extendedTextMessage.contextInfo.participant;
    const bang = m.message.extendedTextMessage.contextInfo.stanzaId;
    return conn.sendMessage(m.chat, {delete: {remoteJid: m.chat, fromMe: false, id: bang, participant: delet}});
  } catch {
    return conn.sendMessage(m.chat, {delete: m.quoted.vM.key});
  }
};
handler.help = ['del', 'delete'];
handler.tags = ['grupo'];
handler.command = /^del(ete)?$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;
export default handler;
