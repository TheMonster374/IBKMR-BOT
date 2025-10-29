import db from '../lib/database.js';

import MessageType from '@whiskeysockets/baileys';
const impts = 0;
const handler = async (m, {conn, text}) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0];
  else who = m.chat;
  if (!who) throw '⚠️ *_Taguea al usuario_*';
  const txt = text.replace('@' + who.split`@`[0], '').trim();
  if (!txt) throw '⚠️️ *_Ingrese la cantidad de -XP- que quiere añadir_*';
  if (isNaN(txt)) throw ' 🔢 *_sólo números_*';
  const xp = parseInt(txt);
  let exp = xp;
  const pjk = Math.ceil(xp * impts);
  exp += pjk;
  if (exp < 1) throw '⚠️ Mínimo es  *1*';
  const users = global.db.data.users;
  users[who].exp += xp;

  await m.reply(`⊜ *✨ XP AÑADIDO*
┏━━━━━━━━━━━⬣
┃⋄  *Total:* ${xp}
┗━━━━━━━━━━━⬣`);
  conn.fakeReply(m.chat, `⊜ *_Recibiste_* \n\n *_+${xp} XP ✨_*`, who, m.text);
};

handler.help = ['addxp *<@user>*'];
handler.tags = ['owner'];
handler.command = ['addxp'];
handler.rowner = true;

export default handler;

