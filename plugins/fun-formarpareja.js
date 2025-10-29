const toM = (a) => '@' + a.split('@')[0];
function handler(m, {groupMetadata}) {
  const ps = groupMetadata.participants.map((v) => v.id);
  const a = ps.getRandom();
  let b;
  do b = ps.getRandom();
  while (b === a);
  const vn = './storagemp3/vivan.mp3';
  conn.sendFile(m.chat, vn, 'vivan.mp3', null, m, true, {type: 'audioMessage', ptt: true, sendEphemeral: true});
  m.reply(`*${toM(a)}, 𝙔𝙖 𝙚𝙨 𝙝𝙤𝙧𝙖 𝙙𝙚 𝙦𝙪𝙚 𝙩𝙚 💍 𝘾𝙖𝙨𝙚𝙨 𝙘𝙤𝙣 ${toM(b)}, 𝙇𝙞𝙣𝙙𝙖 𝙋𝙖𝙧𝙚𝙟𝙖 😉💓*`, null, {
    mentions: [a, b],

  });
}
handler.help = ['formarpareja'];
handler.tags = ['fun'];
handler.command = ['formarpareja', 'formarparejas'];
handler.group = true;
export default handler;
