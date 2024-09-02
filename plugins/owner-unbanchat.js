const handler = async (m) => {
  global.db.data.chats[m.chat].isBanned = false;
  m.reply('*_[🔓] ᴄʜᴀᴛ ᴅᴇꜱʙᴀɴᴇᴀᴅᴏ_*\n\n _𝘈𝘩𝘰𝘳𝘢 𝘐𝘉𝘒𝘔𝘙-𝘉𝘰𝘵 𝘳𝘦𝘴𝘱𝘰𝘯𝘥𝘦𝘳á 𝘢 𝘵𝘰𝘥𝘰𝘴 𝘭𝘰𝘴 𝘤𝘰𝘮𝘢𝘯𝘥𝘰𝘴_*');
};
handler.help = ['unbanchat'];
handler.tags = ['owner'];
handler.command = /^(unbanchat|desbanearchat)$/i;
handler.rowner = true;
export default handler;
