import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  global.img6 = fs.readFileSync('./Multimenu.mp4');
  if (usedPrefix == 'a' || usedPrefix == 'A') return;


  /* const pp = img6*/
  const img = './Multimenu.mp4';
  const d = new Date(new Date + 3600000);
  const locale = 'es-ES';
  const week = d.toLocaleDateString(locale, {weekday: 'long'});
  const date = d.toLocaleDateString(locale, {day: '2-digit', month: '2-digit', year: 'numeric'});
  // const _uptime = process.uptime() * 1000;
  // const uptime = clockString(_uptime);
  const user = global.db.data.users[m.sender];
  const totalusrReg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
  const totalusr = Object.keys(global.db.data.users).length;
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = global.db.data.users[m.sender];
  const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
  const rtotal = Object.entries(global.db.data.users).length || '0';
  const more = String.fromCharCode(8206);
  const readMore = more.repeat(850);
  const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const str = '*_Enviando menu..._*';

  await conn.sendMessage(m.chat, {react: {text: '🤍', key: m.key}});


  await conn.reply(m.chat, '*_Enviando menu..._*', m, {contextInfo: {

    externalAdReply: {

      title: `CANAL DE WHATSAPP`,

      body: `🤍 Unete al canal OFC`,

      thumbnailUrl: 'https://i.imgur.com/DLX1BxG.png',


      sourceUrl: 'https://whatsapp.com/channel/0029VabyyaKGehEIyunTGo0t',

      mediaType: 1,

      showAdAttribution: true,

      renderLargerThumbnail: true,

    }}}, {quoted: fkontak});
  /* {contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: false,
title: `CANAL DE WHATSAPP`,
body: `🤍 Unete al canal OFC`,
mediaType: 1,
sourceUrl: 'https://whatsapp.com/channel/0029VabyyaKGehEIyunTGo0t',
thumbnailUrl: 'https://i.imgur.com/yafZkFB.jpeg'
}}}, { quoted: m })
*/
  try {
    const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
    const name = await conn.getName(who);


    const menu = `

 ┏━⊜「 *=͟͟͞INFO USUARIO* 」
┃🤍 *𝑵𝒐𝒎𝒃𝒓𝒆* : *_${name}_*
┃💎 *𝑫𝒊𝒂𝒎𝒂𝒏𝒕𝒆𝒔* : ${limit}
┃⬆️ *𝑵𝒊𝒗𝒆𝒍* : ${level}
┃🪙 *Coins* : ${money}
┗━━━━━━━━━━━━━⬣
 ${readMore}
┏━⊜「 *=͟͟͞INFO BOT* 」
┃◣w◢ *CREADOR*: Wa.me/573136737414
┃👤 *TOTAL USUARIOS* : ${totalusr}
┗━━━━━━━━━━━━━⬣



`.trim();
    const buttonParamsJson = JSON.stringify({
      title: 'VER LISTA',
      description: 'Lista de todos los menus de INABAKUMORI-BOT 🤍',
      sections: [
        {title: '🔖 Atajos', highlight_label: 'Popular',

          rows: [


            {header: '🤍 Grupos oficiales', title: '🔓 Para: Todos', description: 'Unete a los grupos oficiales de Inabakumori-Bot y a su canal para ver sus futuras actualizaciones', id: usedPrefix + 'grupos'},

            {header: '🫂 Donar', title: '🔓 Para: Todos', description: 'El equipo de Inabakumori-Bot, cada dia se esfuerza para traer las mejores funciones, podrias colaborarles', id: usedPrefix + 'donar'},
            {header: '😵‍💫 Errores ', title: '🔓 Para: Todos', description: 'Usalo si hay un error con algun comando', id: usedPrefix + 'report'},
            {header: '💲 Alquilar Inabakumori', title: '🔓 Para: Todos', description: 'Mira los requisitos para alquilar a inabakumori para que este en tu grupo', id: usedPrefix + 'requisitos'},

          ]},
        {title: '🗂️ LISTA DE MENUS', highlight_label: 'Popular',
          rows: [
            {header: '🔽 MENU DESCARGAS', title: '🔓 Para: Todos', description: 'Menu de descarga de videos y música de redes', id: usedPrefix + 'menudescargas'},
            {header: '🔞 MENU NSFW', title: '🔓 Para: Todos', description: 'Menu de contenido para mayores de 18', id: usedPrefix + 'menunsfw'},
            {header: '🛠️ MENU TOOLS', title: '🔓 Para: Todos', description: 'Menu de herramientas útiles', id: usedPrefix + 'menutools'},
            {header: '⚔️ MENU RPG', title: '🔓 Para: Todos', description: 'Menu de roleplay', id: usedPrefix + 'menurpg'},
            {header: '🖼️ MENU IMG', title: '🔓 Para: Todos', description: 'Menu de imagenes preestablecidas', id: usedPrefix + 'menuimg'},
            {header: '🔎 MENU SEARCH', title: '🔓 Para: Todos', description: 'Menu de busquedas', id: usedPrefix + 'menusearch'},
            {header: '👻 MENU FUN', title: '🔓 Para: Todos', description: 'Menu de comandos divertidos', id: usedPrefix + 'menufun'},
            {header: '🎮 MENU JUEGOS', title: '🔓 Para: Todos', description: 'Menu de juegos', id: usedPrefix + 'menujuegos'},
            {header: '🌐 MENU SUBBOTS', title: '🔓 Para: Todos', description: 'Menu para los subbots', id: usedPrefix + 'menusubbots'},
            {header: '✨ MENU COMPLETO', title: '🔓 Para: Todos', description: usedPrefix + '¿No encuentras el menu que necesitas?, mira el menu completo', id: usedPrefix + 'allmenu'},
          ]},
      ]});
    const interactiveMessage = {
      body: {text: menu},
      footer: {text: wm + ` \nSi algo no funciona utilice el comando *${usedPrefix}menu2*`},
      header: {title: `┏━⊜「 *=͟͟͞NUEVO MENÚ 🤍* 」
┃ Hola, *_${name}_*
┃ Bienvenido al nuevo menu
┃ de Inabakumori-Bot
┗━━━━━━━━━━━━━⬣`, hasMediaAttachment: false},
      nativeFlowMessage: {buttons: [{
        name: 'single_select',
        buttonParamsJson,
      }],
      }};
    const message = {messageContextInfo: {deviceListMetadata: {}, deviceListMetadataVersion: 2}, interactiveMessage};
    await conn.relayMessage(m.chat, {viewOnceMessage: {message}}, {});


    /* await conn.sendFile(m.chat, { video: pp, gifPlayback: true, caption: menu.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, { contextInfo: {

'forwardingScore': 200,

'isForwarded': false,

externalAdReply: {

showAdAttribution: false,

title: `CANAL DE WHATSAPP`,

body: `🤍 Unete al canal OFC`,

mediaType: 1,

sourceUrl: 'https://whatsapp.com/channel/0029VabyyaKGehEIyunTGo0t',

thumbnailUrl: 'https://i.imgur.com/yafZkFB.jpeg'

}}}, { quoted: m })*/


    if (m.isGroup) {
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      await conn.sendMessage(m.chat, menu, {quoted: m});
    }
    await conn.sendMessage(m.chat, menu, {quoted: fkontak2});


    const pp = await conn.profilePictureUrl(conn.user.jid).catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png');


    const img = await (await fetch('https://telegra.ph/file/1e79adfb814a15ff6d473.jpg')).buffer();

    // 'https://telegra.ph/file/1e79adfb814a15ff6d473.jpg'


    /*
  } catch (e) {
    conn.reply(m.chat, '*Inabakumori-bot 🤍*「 *ERROR* 」\n\nOcurrió un *Error*', m)
    throw e
  }
}*/

    /* onst fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
     /* conn.sendMessage(m.chat, {video: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    */ conn.sendMessage(m.chat, {video: pp, gifPlayback: true, caption: menu.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, menu, {quoted: fkontak2});
  } catch (e) {
    console.log(e);
  }
};

handler.command = /^(menu|Menu|Menú|menú|MENU|Multimenu|MultiMenu|MULTIMENU|multi)$/i;


handler.exp = 50;
handler.fail = null;
export default handler;
/* function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');*/
