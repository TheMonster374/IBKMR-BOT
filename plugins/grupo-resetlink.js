const handler = async (m, {conn}) => {
  const revoke = await conn.groupRevokeInvite(m.chat);
  await conn.reply(m.chat, `🔹️ *_Se restableció con éxito el link del grupo._*\n♾ • Link Nuevo: ${'https://chat.whatsapp.com/' + revoke}`, faketick);
};

handler.tags = ['grupo'];
handler.command = handler.help = ['resetlink'];
handler.botAdmin = true;
handler.admin = true;
handler.group = true;
export default handler;
