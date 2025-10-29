const moneyperlimit = 350;
const handler = async (m, {conn, command, args}) => {
  let count = command.replace(/^buy/i, '');
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].money / moneyperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1;
  count = Math.max(1, count);
  if (global.db.data.users[m.sender].money >= moneyperlimit * count) {
    global.db.data.users[m.sender].money -= moneyperlimit * count;
    global.db.data.users[m.sender].limit += count;
    conn.reply(m.chat, `
┌─「 *𝗡𝗢𝗧𝗔 𝗗𝗘 𝗣𝗔𝗚𝗢* 」
‣ *𝗖𝗼𝗺𝗽𝗿𝗮 𝗻𝗼𝗺𝗶𝗻𝗮𝗹* : + ${count}💎 
‣ *𝗚𝗮𝘀𝘁𝗮𝗱𝗼* : -${moneyperlimit * count} Coins 🪙
└──────────────`, m, {contextInfo: {
      'forwardingScore': 400,
      'isForwarded': false,
      'externalAdReply': {
        showAdAttribution: false,
        title: `GRUPO DE WHATSAPP`,
        body: `🤍 Unete al grupo OFC`,
        mediaType: 1,
        sourceUrl: 'https://chat.whatsapp.com/Jql7XsV7V179fvOmKnEftc',
        thumbnailUrl: 'https://i.pinimg.com/originals/b4/a1/91/b4a191e1d7f4d288f3b1204b159a9ff8.gif',
      }}}, {quoted: m});
  } else conn.reply(m.chat, `no tienes suficientes *Coins* para comprar *${count}* Diamantes💎`, m);
};
handler.help = ['Buy <cantidad>', 'Buyall'];
handler.tags = ['rpg'];
handler.command = ['buy', 'buyall'];

handler.disabled = false;

export default handler;
