import util from 'util';
import path from 'path';

function handler(m, {groupMetadata, command, usedPrefix, conn}) {
  const user = (a) => '@' + a.split('@')[0]; // '@' + a.split('@')[0]

  const ps = groupMetadata.participants.map((v) => v.id);
  const a = ps.getRandom();
  const b = ps.getRandom();
  const c = ps.getRandom();
  const d = ps.getRandom();
  const e = ps.getRandom();
  const f = ps.getRandom();
  const g = ps.getRandom();
  const h = ps.getRandom();
  const i = ps.getRandom();
  const j = ps.getRandom();

  if (command == 'topgays') {
    const vn = './media/gay2.mp3';
    const top = `*🌈TOP 10 GAYS/LESBIANAS DEL GRUPO🌈*
    
*_1.- 🏳️‍🌈 ${user(a)}_* 🏳️‍🌈
*_2.- 🪂 ${user(b)}_* 🪂
*_3.- 🪁 ${user(c)}_* 🪁
*_4.- 🏳️‍🌈 ${user(d)}_* 🏳️‍🌈
*_5.- 🪂 ${user(e)}_* 🪂
*_6.- 🪁 ${user(f)}_* 🪁
*_7.- 🏳️‍🌈 ${user(g)}_* 🏳️‍🌈
*_8.- 🪂 ${user(h)}_* 🪂
*_9.- 🪁 ${user(i)}_* 🪁
*_10.- 🏳️‍🌈 ${user(j)}_* 🏳️‍🌈`;
    m.reply(top, null, {mentions: conn.parseMention(top)});
    // m.reply(top, null, {

    // m.reply(conn.sendHydrated(m.chat, `*SON MUY GAYS!!* 🌈`, wm, null, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
    // ['𝙊𝙩𝙧𝙖 𝙫𝙚𝙯 | 𝘼𝙜𝙖𝙞𝙣 🔮', `${usedPrefix + command}`],
    // ['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
    // ], m))

    // contextInfo: {
    // mentionedJid: [a, b, c, d, e, f, g, h, i, j]
    // }})
    conn.sendFile(m.chat, vn, 'error.mp3', null, m, true, {
      type: 'audioMessage',
      ptt: true});
  }

  if (command == 'top') {
    if (!text) throw `Ejemplo de uso:\n.top *texto*`;
    const ps = groupMetadata.participants.map((v) => v.id);
    const a = ps.getRandom();
    const b = ps.getRandom();
    const c = ps.getRandom();
    const d = ps.getRandom();
    const e = ps.getRandom();
    const f = ps.getRandom();
    const g = ps.getRandom();
    const h = ps.getRandom();
    const i = ps.getRandom();
    const j = ps.getRandom();
    const k = Math.floor(Math.random() * 70);
    const x = `${pickRandom(['🤓', '😅', '😂', '😳', '😎', '🥵', '😱', '🤑', '🙄', '💩', '🍑', '🤨', '🥴', '🔥', '👇🏻', '😔', '👀', '🌚'])}`;
    const l = Math.floor(Math.random() * x.length);
    const vn = `https://hansxd.nasihosting.com/sound/sound${k}.mp3`;
    const top = `*${x} Top 10 ${text} ${x}*
    
*1. ${user(a)}*
*2. ${user(b)}*
*3. ${user(c)}*
*4. ${user(d)}*
*5. ${user(e)}*
*6. ${user(f)}*
*7. ${user(g)}*
*8. ${user(h)}*
*9. ${user(i)}*
*10. ${user(j)}*`;
    m.reply(top, null, {mentions: [a, b, c, d, e, f, g, h, i, j]});
    conn.sendFile(m.chat, vn, 'error.mp3', null, m, true, {
      type: 'audioMessage',
      ptt: true});
  }

  if (command == 'topotakus') {
    const vn = './media/otaku.mp3';
    const top = `*🌸 TOP 10 OTAKUS DEL GRUPO 🌸*
    
*_1.- 💮 ${user(a)}_* 💮
*_2.- 🌷 ${user(b)}_* 🌷
*_3.- 💮 ${user(c)}_* 💮
*_4.- 🌷 ${user(d)}_* 🌷
*_5.- 💮 ${user(e)}_* 💮
*_6.- 🌷 ${user(f)}_* 🌷
*_7.- 💮 ${user(g)}_* 💮
*_8.- 🌷 ${user(h)}_* 🌷
*_9.- 💮 ${user(i)}_* 💮
*_10.- 🌷 ${user(j)}_* 🌷`;
    m.reply(top, null, {mentions: conn.parseMention(top)});
    // m.reply(top, null, {
    // conn.sendHydrated(m.chat, top, wm, null, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
    // ['𝙊𝙩𝙧𝙖 𝙫𝙚𝙯 | 𝘼𝙜𝙖𝙞𝙣 🔮', `${usedPrefix + command}`],
    // ['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
    // ], m, null, {
    // contextInfo: {
    // mentionedJid: [a, b, c, d, e, f, g, h, i, j]
    // }})
    conn.sendFile(m.chat, vn, 'otaku.mp3', null, m, true, {
      type: 'audioMessage',
      ptt: true,
    });
  }

  if (command == 'topintegrantes') {
    const top = `*_💎TOP 10 L@S MEJORES INTEGRANTES👑_*
    
*_1.- 💎 ${user(a)}_* 💎
*_2.- 👑 ${user(b)}_* 👑
*_3.- 💎 ${user(c)}_* 💎
*_4.- 👑 ${user(d)}_* 👑
*_5.- 💎 ${user(e)}_* 💎
*_6.- 👑 ${user(f)}_* 👑
*_7.- 💎 ${user(g)}_* 💎
*_8.- 👑 ${user(h)}_* 👑
*_9.- 💎 ${user(i)}_* 💎
*_10.- 👑 ${user(j)}_* 👑`;
    m.reply(top, null, {mentions: conn.parseMention(top)});
  }

  if (command == 'topintegrante') {
    const top = `*_💎TOP 10 L@S MEJORES INTEGRANTES👑_*
    
*_1.- 💎 ${user(a)}_* 💎
*_2.- 👑 ${user(b)}_* 👑
*_3.- 💎 ${user(c)}_* 💎
*_4.- 👑 ${user(d)}_* 👑
*_5.- 💎 ${user(e)}_* 💎
*_6.- 👑 ${user(f)}_* 👑
*_7.- 💎 ${user(g)}_* 💎
*_8.- 👑 ${user(h)}_* 👑
*_9.- 💎 ${user(i)}_* 💎
*_10.- 👑 ${user(j)}_* 👑`;
    m.reply(top, null, {mentions: conn.parseMention(top)});
  }

  if (command == 'toplagrasa') {
    const top = `*_Uwu TOP 10 LA GRASA Uwu_* 
    
*_1.- Bv ${user(a)} Bv_*
*_2.- :v ${user(b)} :v_*
*_3.- :D ${user(c)} :D_*
*_4.- Owo ${user(d)} Owo_*
*_5.- U.u ${user(e)} U.u_*
*_6.- >:v ${user(f)} >:v_*
*_7.- :'v ${user(g)} :'v_*
*_8.- ._. ${user(h)} ._._*
*_9.- :V ${user(i)} :V_*
*_10.- XD ${user(j)} XD_*`;
    m.reply(top, null, {mentions: conn.parseMention(top)});
  }

  if (command == 'topgrasa') {
    const top = `*_Uwu TOP 10 LA GRASA Uwu_* 
    
*_1.- Bv ${user(a)} Bv_*
*_2.- :v ${user(b)} :v_*
*_3.- :D ${user(c)} :D_*
*_4.- Owo ${user(d)} Owo_*
*_5.- U.u ${user(e)} U.u_*
*_6.- >:v ${user(f)} >:v_*
*_7.- :'v ${user(g)} :'v_*
*_8.- ._. ${user(h)} ._._*
*_9.- :V ${user(i)} :V_*
*_10.- XD ${user(j)} XD_*`;
    m.reply(top, null, {mentions: conn.parseMention(top)});
  }

  if (command == 'toppanafrescos') {
    const top = `*_👊TOP 10 PANAFRESCOS👊_* 
    
*_1.- 🤑 ${user(a)}_* 🤑
*_2.- 🤙 ${user(b)}_* 🤙
*_3.- 😎 ${user(c)}_* 😎
*_4.- 👌 ${user(d)}_* 👌
*_5.- 🧐 ${user(e)}_* 🧐
*_6.- 😃 ${user(f)}_* 😃
*_7.- 😋 ${user(g)}_* 😋
*_8.- 🤜 ${user(h)}_* 🤜
*_9.- 💪 ${user(i)}_* 💪
*_10.- 😉 ${user(j)}_* 😉`;
    m.reply(top, null, {mentions: conn.parseMention(top)});
  }

  if (command == 'toppanafresco') {
    const top = `*_👊TOP 10 PANAFRESCOS👊_* 
    
*_1.- 🤑 ${user(a)}_* 🤑
*_2.- 🤙 ${user(b)}_* 🤙
*_3.- 😎 ${user(c)}_* 😎
*_4.- 👌 ${user(d)}_* 👌
*_5.- 🧐 ${user(e)}_* 🧐
*_6.- 😃 ${user(f)}_* 😃
*_7.- 😋 ${user(g)}_* 😋
*_8.- 🤜 ${user(h)}_* 🤜
*_9.- 💪 ${user(i)}_* 💪
*_10.- 😉 ${user(j)}_* 😉`;
    m.reply(top, null, {mentions: conn.parseMention(top)});
  }

  if (command == 'topshiposters') {
    const top = `*_😱TOP 10 SHIPOSTERS DEL GRUPO😱_* 
    
*_1.- 😈 ${user(a)}_* 😈
*_2.- 🤙 ${user(b)}_* 🤙
*_3.- 🥶 ${user(c)}_* 🥶
*_4.- 🤑 ${user(d)}_* 🤑
*_5.- 🥵 ${user(e)}_* 🥵
*_6.- 🤝 ${user(f)}_* 🤝
*_7.- 😟 ${user(g)}_* 😟
*_8.- 😨 ${user(h)}_* 😨
*_9.- 😇 ${user(i)}_* 😇
*_10.- 🤠 ${user(j)}_* 🤠`;
    m.reply(top, null, {mentions: conn.parseMention(top)});
  }

  if (command == 'topshipost') {
    const top = `*_😱TOP 10 SHIPOSTERS DEL GRUPO😱_* 
    
*_1.- 😈 ${user(a)}_* 😈
*_2.- 🤙 ${user(b)}_* 🤙
*_3.- 🥶 ${user(c)}_* 🥶
*_4.- 🤑 ${user(d)}_* 🤑
*_5.- 🥵 ${user(e)}_* 🥵
*_6.- 🤝 ${user(f)}_* 🤝
*_7.- 😟 ${user(g)}_* 😟
*_8.- 😨 ${user(h)}_* 😨
*_9.- 😇 ${user(i)}_* 😇
*_10.- 🤠 ${user(j)}_* 🤠`;
    m.reply(top, null, {mentions: conn.parseMention(top)});
  }

  if (command == 'toppajeros') {
    const top = `*_😏TOP L@S MAS PAJEROS/AS DEL GRUPO💦_* 
    
*_1.- 🥵 ${user(a)}_* 💦
*_2.- 🥵 ${user(b)}_* 💦
*_3.- 🥵 ${user(c)}_* 💦
*_4.- 🥵 ${user(d)}_* 💦
*_5.- 🥵 ${user(e)}_* 💦
*_6.- 🥵 ${user(f)}_* 💦
*_7.- 🥵 ${user(g)}_* 💦
*_8.- 🥵 ${user(h)}_* 💦
*_9.- 🥵 ${user(i)}_* 💦
*_10.- 🥵 ${user(j)}_* 💦`;
    m.reply(top, null, {mentions: conn.parseMention(top)});
  }

  if (command == 'toppajer@s') {
    const top = `*_😏TOP L@S MAS PAJEROS/AS DEL GRUPO💦_* 
    
*_1.- 🥵 ${user(a)}_* 💦
*_2.- 🥵 ${user(b)}_* 💦
*_3.- 🥵 ${user(c)}_* 💦
*_4.- 🥵 ${user(d)}_* 💦
*_5.- 🥵 ${user(e)}_* 💦
*_6.- 🥵 ${user(f)}_* 💦
*_7.- 🥵 ${user(g)}_* 💦
*_8.- 🥵 ${user(h)}_* 💦
*_9.- 🥵 ${user(i)}_* 💦
*_10.- 🥵 ${user(j)}_* 💦`;
    m.reply(top, null, {mentions: conn.parseMention(top)});
  }

  if (command == 'toplind@s') {
    const top = `*_😳TOP L@S MAS LIND@S Y SEXIS DEL GRUPO😳_*
    
*_1.- ✨ ${user(a)}_* ✨
*_2.- ✨ ${user(b)}_* ✨
*_3.- ✨ ${user(c)}_* ✨
*_4.- ✨ ${user(d)}_* ✨
*_5.- ✨ ${user(e)}_* ✨
*_6.- ✨ ${user(f)}_* ✨
*_7.- ✨ ${user(g)}_* ✨
*_8.- ✨ ${user(h)}_* ✨
*_9.- ✨ ${user(i)}_* ✨
*_10.- ✨ ${user(j)}_* ✨`;
    m.reply(top, null, {mentions: conn.parseMention(top)});
  }

  if (command == 'toplindos') {
    const top = `*_😳TOP L@S MAS LIND@S Y SEXIS DEL GRUPO😳_*
    
*_1.- ✨ ${user(a)}_* ✨
*_2.- ✨ ${user(b)}_* ✨
*_3.- ✨ ${user(c)}_* ✨
*_4.- ✨ ${user(d)}_* ✨
*_5.- ✨ ${user(e)}_* ✨
*_6.- ✨ ${user(f)}_* ✨
*_7.- ✨ ${user(g)}_* ✨
*_8.- ✨ ${user(h)}_* ✨
*_9.- ✨ ${user(i)}_* ✨
*_10.- ✨ ${user(j)}_* ✨`;
    m.reply(top, null, {mentions: conn.parseMention(top)});
  }

  if (command == 'topputos') {
    const top = `*_😏TOP L@S MAS PUT@S DEL GRUPO SON🔥_* 
    
*_1.- 👉 ${user(a)}_* 👌
*_2.- 👉 ${user(b)}_* 👌
*_3.- 👉 ${user(c)}_* 👌
*_4.- 👉 ${user(d)}_* 👌
*_5.- 👉 ${user(e)}_* 👌
*_6.- 👉 ${user(f)}_* 👌
*_7.- 👉 ${user(g)}_* 👌
*_8.- 👉 ${user(h)}_* 👌
*_9.- 👉 ${user(i)}_* 👌
*_10.- 👉 ${user(j)}_* 👌`;
    m.reply(top, null, {mentions: conn.parseMention(top)});
  }

  if (command == 'topput@s') {
    const top = `*_😏TOP L@S MAS PUT@S DEL GRUPO SON🔥_* 
    
*_1.- 👉 ${user(a)}_* 👌
*_2.- 👉 ${user(b)}_* 👌
*_3.- 👉 ${user(c)}_* 👌
*_4.- 👉 ${user(d)}_* 👌
*_5.- 👉 ${user(e)}_* 👌
*_6.- 👉 ${user(f)}_* 👌
*_7.- 👉 ${user(g)}_* 👌
*_8.- 👉 ${user(h)}_* 👌
*_9.- 👉 ${user(i)}_* 👌
*_10.- 👉 ${user(j)}_* 👌`;
    m.reply(top, null, {mentions: conn.parseMention(top)});
  }

  if (command == 'topfamosos') {
    const top = `*_🌟TOP PERSONAS FAMOSAS EN EL GRUPO🌟_* 
    
*_1.- 🛫 ${user(a)}_* 🛫
*_2.- 🥂 ${user(b)}_* 🥂
*_3.- 🤩 ${user(c)}_* 🤩
*_4.- 🛫 ${user(d)}_* 🛫
*_5.- 🥂 ${user(e)}_* 🥂
*_6.- 🤩 ${user(f)}_* 🤩
*_7.- 🛫 ${user(g)}_* 🛫
*_8.- 🥂 ${user(h)}_* 🥂
*_9.- 🤩 ${user(i)}_* 🤩
*_10.- 🛫 ${user(j)}_* 🛫`;
    m.reply(top, null, {mentions: conn.parseMention(top)});
  }

  if (command == 'topfamos@s') {
    const top = `*_🌟TOP PERSONAS FAMOSAS EN EL GRUPO🌟_* 
    
*_1.- 🛫 ${user(a)}_* 🛫
*_2.- 🥂 ${user(b)}_* 🥂
*_3.- 🤩 ${user(c)}_* 🤩
*_4.- 🛫 ${user(d)}_* 🛫
*_5.- 🥂 ${user(e)}_* 🥂
*_6.- 🤩 ${user(f)}_* 🤩
*_7.- 🛫 ${user(g)}_* 🛫
*_8.- 🥂 ${user(h)}_* 🥂
*_9.- 🤩 ${user(i)}_* 🤩
*_10.- 🛫 ${user(j)}_* 🛫`;
    m.reply(top, null, {mentions: conn.parseMention(top)});
  }

  if (command == 'topsostero') {
    const top = `*_😏TOP PERSONAS SOLTERO/A DEL GRUPO😏_* 
    
*_1.- 😎 ${user(a)}_* 😎
*_2.- 😏 ${user(b)}_* 😏
*_3.- 😏 ${user(c)}_* 😏
*_4.- 😎 ${user(d)}_* 😎
*_5.- 😏 ${user(e)}_* 😏
*_6.- 😎 ${user(f)}_* 😎
*_7.- 😏 ${user(g)}_* 😏
*_8.- 😎 ${user(h)}_* 😎
*_9.- 😎 ${user(i)}_* 😎
*_10.- 😏 ${user(j)}_* 😏`;
    m.reply(top, null, {mentions: conn.parseMention(top)});
  }

  if (command == 'topparejas') {
    const top = `*_😍 Las 5 maravillosas parejas del grupo 😍_*
    
*_1.- ${user(a)} 💘 ${user(b)}_* 
Que hermosa pareja 💖, me invitan a su Boda 🛐

*_2.- ${user(c)} 💘 ${user(d)}_*  
🌹 Ustedes se merecen lo mejor del mundo 💞

*_3.- ${user(e)} 💘 ${user(f)}_* 
Tan enamorados 😍, para cuando la familia 🥰

*_4.- ${user(g)} 💘 ${user(h)}_* 
💗 Decreto que ustedes son la pareja del Año 💗 

*_5.- ${user(i)} 💘 ${user(j)}_* 
Genial! 💝, están de Luna de miel 🥵✨❤️‍🔥`;
    m.reply(top, null, {mentions: conn.parseMention(top)});
  }

  if (command == 'top5parejas') {
    const top = `*_😍 Las 5 maravillosas parejas del grupo 😍_*
    
*_1.- ${user(a)} 💘 ${user(b)}_* 
Que hermosa pareja 💖, me invitan a su Boda 🛐

*_2.- ${user(c)} 💘 ${user(d)}_*  
🌹 Ustedes se merecen lo mejor del mundo 💞

*_3.- ${user(e)} 💘 ${user(f)}_* 
Tan enamorados 😍, para cuando la familia 🥰

*_4.- ${user(g)} 💘 ${user(h)}_* 
💗 Decreto que ustedes son la pareja del Año 💗 

*_5.- ${user(i)} 💘 ${user(j)}_* 
Genial! 💝, están de Luna de miel 🥵✨❤️‍🔥`;
    m.reply(top, null, {mentions: conn.parseMention(top)});
  }
}
handler.help = handler.command = ['topgays', 'topotakus', 'topintegrantes', 'topintegrante', 'toplagrasa', 'topgrasa', 'toppanafrescos', 'toppanafresco', 'topshiposters', 'topshipost', 'toppajeros', 'toppajer@s', 'toplindos', 'toplind@s', 'topputos', 'topput@s', 'topfamosos', 'topfamos@s', 'topparejas', 'top5parejas'];
handler.tags = ['fun'];
handler.group = true;
handler.money = 90;
handler.register = true;
export default handler;
