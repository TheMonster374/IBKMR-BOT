import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, text, args}) => {
  const fkontak = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
  const who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  const name = await conn.getName(who);


  const amount = parseInt(args[0]);

  const color = args[1]?.toLowerCase();


  const colores = ['rojo', 'negro'];

  const user = global.db.data.users[who];

  const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];

  if (!(who in global.db.data.users)) throw `✳️ El usuario no se encuentra en mi base de datos`;

  if (args.length < 2 || !color) throw '`❌ Error`\n\n*_Ingresa la cantidad que quieres apostar y el color rojo o negro._* \n\n> Formato correcto: .casino <cantidad> <color>';

  if (isNaN(amount) || amount < 10) throw '`❌ Error` \n\n *_Lo minimo para apostar son 10 de (✨ exp/🪙 coins/💎 diamantes) * \n\n> Formato correcto: .casino <cantidad> <color>';
  if (!colores.includes(color)) throw '`❌ Error` \n\n _Debes especificar un color válido: rojo o negro_*';
  if (user.exp < amount) throw '`❌ Error`\n\n*_¡No tienes suficiente!_*';
  if (amount > 10000) throw '`❌ Error`\n\n*_No puedes apostar mas de 10000 \n⚠️`CANTIDADES MAXIMAS:`\n ✨ Exp: 10.000 \n🪙 Coins: 10.000 \n 💎 Diamantes: 99_.*';


  const menu = `
╭━━━〔 *🎰 𝘾𝙖𝙨𝙞𝙣𝙤* 〕━━⬣
┃ *Bienvenido al casino ${name}*
┃
┃ ⚠️ *CANTIDADES MAXIMAS:*
┃
┃  ✨ Exp: 10.000 
┃  🪙 Coins: 10.000 
┃  💎 Diamantes: 99
╰━━〔 𝙄𝙉𝘼𝘽𝘼𝙆𝙐𝙈𝙊𝙍𝙄-𝘽𝙤𝙩 〕━⬣

 
`.trim();
  await conn.sendMessage(m.chat, {react: {text: '🎲', key: m.key}});


  await conn.reply(m.chat, '*_🔓🎰Abriendo casino..._*', m, {contextInfo: {

    externalAdReply: {

      title: `CANAL DE WHATSAPP`,

      body: `🤍 Unete al canal OFC`,

      thumbnailUrl: 'https://i.imgur.com/qDRI4ym.jpeg',


      sourceUrl: 'https://whatsapp.com/channel/0029VabyyaKGehEIyunTGo0t',

      mediaType: 1,

      showAdAttribution: true,

      renderLargerThumbnail: true,

    }}}, {quoted: fkontak});

  const buttonParamsJson = JSON.stringify({
    title: '🎲 RULETAS',
    description: 'Lista de todos los menus de INABAKUMORI-BOT 🤍',
    sections: [
      {title: '🎰 Apuestas', highlight_label: 'Popular',

        rows: [

          {header: '🪙 Ruleta coins', title: '🪙 Apostar coins', description: '🔴/⚫ Elige la cantidad y el color (negro/rojo)', id: usedPrefix + `rt ${text} ${text}`},

          {header: '✨ Ruleta exp', title: '✨ Apostar exp', description: '🔴/⚫ Elige la cantidad y el color (negro/rojo)', id: usedPrefix + `rt2 ${text} ${text}`},

          {header: '💎 Ruleta diamantes', title: '💎 Apostar diamantes', description: '🔴/⚫ Elige la cantidad y el color (negro/rojo)', id: usedPrefix + `rt3 ${text} ${text}`},
        ]},
    ]});
  const interactiveMessage = {
    body: {text: menu},
    footer: {text: `Escribe la cantidad y el color y luego elige el botón para apostar, si no funciona, use el rt, rt2 o rt3\n\n` + wm + `\nBy Monster`},
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
            thumbnailUrl: 'https://imgur.com/o9NvkcL.jpeg',
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
          thumbnailUrl: 'https://imgur.com/o9NvkcL.jpeg',
          sourceUrl: 'https://chat.whatsapp.com/Jql7XsV7V179fvOmKnEftc',
          mediaType: 1,
          showAdAttribution: true,
          renderLargerThumbnail: true,
        }}}, {quoted: fkontak});
};


/* handler.help = ['bal']
handler.tags = ['rpg']*/
handler.command = ['casino'];
export default handler;
