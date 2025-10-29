import db from '../lib/database.js';

import MessageType from '@whiskeysockets/baileys';
const impuesto = 0.02;
const handler = async (m, {conn, text}) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0];
  else who = m.chat;
  if (!who) throw '⚠️ *_Menciona al usuario con @user._*';
  const txt = text.replace('@' + who.split`@`[0], '').trim();
  if (!txt) throw '⚠️️ *_Ingrese la cantidad de -XP- que quiere transferir._*';
  if (isNaN(txt)) throw ' 🔢 *sólo números.*';
  const coins = parseInt(txt);
  let money = coins;
  const imt = Math.ceil(coins * impuesto);
  money += imt;
  if (money < 1) throw '⚠️️ *Mínimo es  1.*';
  const users = global.db.data.users;
  if (money > users[m.sender].money) throw '⚠️️ *_Coins insuficiente para transferir._*';
  users[m.sender].money -= money;
  users[who].money += coins;

  await m.reply(`⊜ *TRANSFERENCIA De COINS 🪙*
┏━━━━━━━━━━━━━⬣
┃⋄  *${-coins}* COINS
┃⋄ Impuesto 2% : *${-imt}* COINS
┃⋄ Total gastado: *${-money} COINS*
┗━━━━━━━━━━━━━⬣`);
  conn.fakeReply(m.chat, `⊜ *_Recibiste_*\n\n *_+${coins} COINS 🪙._*`, who, m.text);
};
handler.help = ['paycoins *@user <monto>*'];
handler.tags = ['rpg'];
handler.command = ['paycoins', 'transfercoins', 'darcoins'];
handler.rowner = false;

export default handler;
