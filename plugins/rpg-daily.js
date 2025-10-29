import fetch from 'node-fetch';
const handler = async (m, {isPrems, conn}) => {
  const fkontak = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net',
  };
  const mystic = './Menu2.jpg';
  const dos = [md];
  const user = global.db.data.users[m.sender];
  const premium = user.premium;

  const exp = `${pickRandom([500, 600, 700, 800, 900, 999, 1000, 1300, 1500, 1800])}` * 1;
  const exppremium = `${pickRandom([1000, 1500, 1800, 2100, 2500, 2900, 3300, 3600, 4000, 4500])}` * 1;

  const money = `${pickRandom([300, 500, 700, 900, 500, 800, 900, 1100, 1350, 1500])}` * 1;
  const moneypremium = `${pickRandom([800, 1300, 1600, 1900, 2200, 2500, 2700, 3000, 3300, 3500])}` * 1;

  const recompensas = {
    exp: premium ? exppremium : exp,
    money: premium ? moneypremium : money,
  };

  const time = user.lastclaim + 7200000; // 2 Horas 7200000
  if (new Date - user.lastclaim < 7200000) return await conn.reply(m.chat, `𝙔𝘼 𝙍𝙀𝘾𝙇𝘼𝙈𝘼𝙎𝙏𝙀 𝙏𝙐 𝙍𝙀𝙂𝘼𝙇𝙊 🎁\n𝙑𝙐𝙀𝙇𝙑𝙀 𝙀𝙉 *${msToTime(time - new Date())}* 𝙋𝘼𝙍𝘼 𝙑𝙊𝙇𝙑𝙀𝙍 𝘼 𝙍𝙀𝘾𝙇𝘼𝙈𝘼𝙍`, fkontak, m);
  let texto = '';
  for (const reward of Object.keys(recompensas)) {
    if (!(reward in user)) continue;
    user[reward] += recompensas[reward];
    texto += `*+${recompensas[reward]}* ${global.rpgshop.emoticon(reward)}\n┃ `;
  }
  const text = `╭━━🎁━🎁━🎁━━⬣
┃ ✨ 𝙊𝘽𝙏𝙄𝙀𝙉𝙀𝙎 𝙐𝙉 𝙍𝙀𝙂𝘼𝙇𝙊!!
┃ *${premium ? '🎟️ Recompensa Premium' : '🆓 Recompensa Gratis'}*
┃ ${texto}
╰━━🎁━🎁━🎁━━⬣\n\n`;
  const img = './Menu.png';
  await conn.sendFile(m.chat, img, 'mystic.jpg', text, fkontak);
  user.lastclaim = new Date * 1;
};
handler.help = ['daily'];
handler.tags = ['rpg'];
handler.command = ['daily', 'reclamar', 'reclamo', 'regalo', 'claim'];
export default handler;

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function msToTime(duration) {
  const milliseconds = parseInt((duration % 1000) / 100);
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;

  return hours + ' Horas ' + minutes + ' Minutos';
}
