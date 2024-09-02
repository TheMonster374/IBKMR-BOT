const handler = async (m) => {
  global.db.data.chats[m.chat].isBanned = true;
  m.reply('*_[🔒] ᴄʜᴀᴛ ʙᴀɴᴇᴀᴅᴏ_*\n\n*𝘐𝘉𝘒𝘔𝘙-𝘉𝘰𝘵 𝘯𝘰 𝘳𝘦𝘴𝘱𝘰𝘯𝘥𝘦𝘳á 𝘢 𝘯𝘪𝘯𝘨𝘶𝘯 𝘤𝘰𝘮𝘢𝘯𝘥𝘰*');
};
handler.help = ['banchat'];
handler.tags = ['owner'];
handler.command = /^(banchat|banearbot)$/i;
handler.rowner = true;
export default handler;
