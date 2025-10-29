import db from '../lib/database.js';

import MessageType from '@whiskeysockets/baileys';
const impts = 0;
const handler = async (m, {conn, text}) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0];
  else who = m.chat;
  if (!who) throw '⚠️ *_Taguea al usuario_*';
  const txt = text.replace('@' + who.split`@`[0], '').trim();
  if (!txt) throw '⚠️️ *_Ingrese la cantidad de -DIAMANTES- que quiere añadir_*';
  if (isNaN(txt)) throw ' 🔢 *_sólo números_*';
  const diamond = parseInt(txt);
  let limit = diamond;
  const pjk = Math.ceil(diamond * impts);
  limit += pjk;
  if (limit < 1) throw '⚠️ Mínimo es  *1*';
  const users = global.db.data.users;
  users[who].limit += diamond;

  await m.reply(`⊜ *💎 DIAMANTES AÑADIDOS*
┏━━━━━━━━━━━⬣
┃⋄  *Total:* ${diamond} 💎 
┗━━━━━━━━━━━⬣`);
  conn.fakeReply(m.chat, `⊜ *_Recibiste_* \n\n *_+${diamond} DIAMANTES 💎_*`, who, m.text);
};

handler.help = ['adddi *<@user>*'];
handler.tags = ['owner'];
handler.command = ['adddi'];
handler.rowner = true;

export default handler;
