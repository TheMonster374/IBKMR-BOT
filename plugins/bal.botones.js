import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, text}) => {
  const fkontak = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
  const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
  const who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  const user = global.db.data.users[who];
  if (!(who in global.db.data.users)) throw `✳️ El usuario no se encuentra en mi base de datos`;
  const name = await conn.getName(who);

  const menu = `
╭━━━〔 *𝑩𝒂𝒍𝒂𝒏𝒄𝒆 👝* 〕━━⬣z
┃  𝑬𝒏 𝒔𝒖 𝑩𝒂𝒍𝒂𝒏𝒄𝒆 𝒕𝒊𝒆𝒏𝒆...
┃ *📌 Nombre* : _${name}_
┃ *💎 Diamantes* : _${user.limit}_
┃ *🪙 Coins* : _${user.money}_
┃ *✨ XP* : _${user.exp}_
┃ *👑 Premium* : ⇢ ${user.premium ? '✅' : '❌'} 
┃ *📍 Rango* : ${user.role}
┃ *⬆️ Nivel* : ${user.level}
╰━━〔 𝙄𝙉𝘼𝘽𝘼𝙆𝙐𝙈𝙊𝙍𝙄-𝘽𝙤𝙩 〕━⬣

*NOTA :* 
Puedes comprar 💎 diamantes usando los comandos
❏ *${usedPrefix}buy <cantidad>*
❏ *${usedPrefix}buyall*`;
  const buttonParamsJson = JSON.stringify({
    title: 'VER LISTA',
    description: 'Lista de todos los menus de INABAKUMORI-BOT 🤍',
    sections: [
      {title: '⛏️ Minería', highlight_label: 'Popular',

        rows: [

          {header: '💎 Minar Diamantes', title: '🔓 Para: Todos', description: '¡Mina diamantes!', id: usedPrefix + 'minardiamantes'},

          {header: '🪙 Minar Coins', title: '🔓 Para: Todos', description: '¡Mina coins!', id: usedPrefix + 'minarcoins'},

          {header: '✨ Minar experiencia', title: '🔓 Para: Todos', description: '¡Mina experiencia!', id: usedPrefix + 'minar'},
        ]},
      {title: '✨ Experiencia', highlight_label: 'Popular',

        rows: [

          {header: '❓ Acertijo', title: '🔓 Para: Todos', description: 'Resuelve el acertijo y gana exp', id: usedPrefix + 'acertijo'},

          {header: '🎶 Adivina la canción', title: '🔓 Para: Todos', description: 'Adivina la canción y gana exp', id: usedPrefix + 'cancion'},

          {header: '📽️ Adivina la película', title: '🔓 Para: Todos', description: '¡Adivina la película con emojis!', id: usedPrefix + 'advpe'},

          {header: '🌎 Capitales', title: '🔓 Para: Todos', description: 'Responde cual es la capital', id: usedPrefix + 'capitales'},

          {header: '⁉️ Trivia', title: '🔓 Para: Todos', description: 'Responde preguntas y gana exp', id: usedPrefix + 'trivia'},

        ]},
      {title: '🔣 Otras formas', highlight_label: 'Popular',

        rows: [

          {header: '📅 Daily', title: '🔓 Para: Todos', description: '¡Reclama tu recompensa diaria!', id: usedPrefix + 'daily'},

          {header: '💪 Trabajo', title: '🔓 Para: Todos', description: '¡Trabaja y gana exp!', id: usedPrefix + 'w'},

          {header: '😈 Crimen', title: '🔓 Para: Todos', description: 'Comete crimenesy gana exp, diamantes o coins, ¡que no te pille la poli! 🚓', id: usedPrefix + 'crime'},
        ]},
    ]});
  const interactiveMessage = {
    body: {text: menu},
    footer: {text: `Si no funciona, escriba .bal2 o .menu2\n\n` + wm + `\nBy Monster`},
    header: {title: null,
      hasMediaAttachment: false},
    nativeFlowMessage: {buttons: [{
      name: 'single_select',
      buttonParamsJson,
    }],
    }};
  const message = {messageContextInfo: {deviceListMetadata: {}, deviceListMetadataVersion: 2}, interactiveMessage};
  await conn.relayMessage(m.chat, {viewOnceMessage: {message}}, {});
  if (m.isGroup) {
    const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
    conn.sendMessage(m.chat, menu, fkontak,
        {contextInfo: {
          externalAdReply: {
            title: `🤍 Unete al grupo OFC`,
            body: user.name,
            thumbnailUrl: 'https://i.pinimg.com/originals/b4/a1/91/b4a191e1d7f4d288f3b1204b159a9ff8.gif',
            sourceUrl: 'https://chat.whatsapp.com/Jql7XsV7V179fvOmKnEftc',
            mediaType: 1,
            showAdAttribution: true,
            renderLargerThumbnail: true,
          }}}, {quoted: fkontak},
        {quoted: m});
  }
  conn.sendMessage(m.chat, menu, fkontak,
      {contextInfo: {
        externalAdReply: {
          title: `🤍 Unete al grupo OFC`,
          body: user.name,
          thumbnailUrl: 'https://i.pinimg.com/originals/b4/a1/91/b4a191e1d7f4d288f3b1204b159a9ff8.gif',
          sourceUrl: 'https://chat.whatsapp.com/Jql7XsV7V179fvOmKnEftc',
          mediaType: 1,
          showAdAttribution: true,
          renderLargerThumbnail: true,
        }}}, {quoted: fkontak});
};


handler.help = ['bal'];
handler.tags = ['rpg'];
handler.command = ['bal'];
export default handler;
