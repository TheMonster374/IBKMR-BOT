import db from '../lib/database.js';

import MessageType from '@whiskeysockets/baileys';
const impts = 0;
const handler = async (m, {conn, text}) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0];
  else who = m.chat;
  if (!who) throw '⚠️ *_Taguea al usuario_*';
  const txt = text.replace('@' + who.split`@`[0], '').trim();
  if (!txt) throw '⚠️️ *_Ingrese la cantidad de -COINS- que quiere añadir_*';
  if (isNaN(txt)) throw ' 🔢 *_sólo números_*';
  const coins = parseInt(txt);
  let money = coins;
  const pjk = Math.ceil(coins * impts);
  money += pjk;
  if (money < 1) throw '⚠️ Mínimo es  *1*';
  const users = global.db.data.users;
  users[who].money += coins;

  await m.reply(`⊜ *🪙 COINS AÑADIDOS*
┏━━━━━━━━━━━⬣
┃⋄  *Total:* ${coins} 🪙
┗━━━━━━━━━━━⬣`);
  conn.fakeReply(m.chat, `⊜ *_Recibiste_* \n\n *_+${coins} COINS 🪙_*`, who, m.text);
};

handler.help = ['addcoins *<@user>*'];
handler.tags = ['owner'];
handler.command = ['addcoins'];
handler.rowner = true;

export default handler;
