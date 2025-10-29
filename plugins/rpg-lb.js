const handler = async (m, {conn, args, participants}) => {
  const users = Object.entries(global.db.data.users).map(([key, value]) => {
    return {...value, jid: key};
  });
  const sortedCoins = users.map(toNumber('money')).sort(sort('money'));
  const sortedLim = users.map(toNumber('limit')).sort(sort('limit'));
  const sortedLevel = users.map(toNumber('level')).sort(sort('level'));
  const usersCoins = sortedCoins.map(enumGetKey);
  const usersLim = sortedLim.map(enumGetKey);
  const usersLevel = sortedLevel.map(enumGetKey);
  const len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 10)) : Math.min(10, sortedCoins.length);
  const adventurePhrases = [
    '',
  ];
  const randomAdventurePhrase = adventurePhrases[Math.floor(Math.random() * adventurePhrases.length)];
  const texto = `
┏━━━━━━━━━━━━━━•
┃-> *TOP ${len} COINS 🪙*
┃*👤 Tú posición:* ${usersCoins.indexOf(m.sender) + 1} de ${usersCoins.length}
┃
┃${sortedCoins.slice(0, len).map(({jid, money}, i) => `${i + 1}. ${participants.some((p) => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *${money} Coins*`).join`\n┃`}
┃
┃-> *TOP ${len} DIAMANTES 💎*
┃*👤 Tú posición:* ${usersLim.indexOf(m.sender) + 1} de ${usersLim.length}
┃
┃${sortedLim.slice(0, len).map(({jid, limit}, i) => `${i + 1}. ${participants.some((p) => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *${limit} Diamantes*`).join`\n┃`}
┃
┃-> *TOP ${len} NIVEL ⏫*
┃*👤 Tú posición:* ${usersLevel.indexOf(m.sender) + 1} de ${usersLevel.length}
┃
┃${sortedLevel.slice(0, len).map(({jid, level}, i) => `${i + 1}. ${participants.some((p) => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *Nivel ${level}*`).join`\n┃`}
┃
┗━━━━━━━━━━━━━━•
`.trim();
  conn.sendMessage(m.chat, {text: texto, mentions: conn.parseMention(texto)}, {quoted: m});
};
handler.help = ['lb'];
handler.tags = ['rpg'];
handler.command = ['leaderboard', 'lb'];
handler.fail = null;
export default handler;

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property];
  else return (...args) => args[ascending & 1] - args[!ascending & 1];
}

function toNumber(property, _default = 0) {
  if (property) {
    return (a, i, b) => {
      return {...b[i], [property]: a[property] === undefined ? _default : a[property]};
    };
  } else return (a) => a === undefined ? _default : a;
}

function enumGetKey(a) {
  return a.jid;
}
