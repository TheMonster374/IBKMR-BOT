const handler = async (m, {conn, command}) => {
  if (command == 'dash' || command == 'dashboard' || command == 'views') {
    let stats = Object.entries(db.data.stats).map(([key, val]) => {
      const name = Array.isArray(plugins[key]?.help) ? plugins[key]?.help?.join(' , ') : plugins[key]?.help || key;

      if (/exec/.test(name)) return;
      return {name, ...val};
    });

    stats = stats.sort((a, b) => b.total - a.total);
    const handlers = stats.slice(0, 10).map(({name, total, last}) => {
      return `⬡ *Comando* : *${name}*\n⬡ *Usos* : ${total}`;
    }).join`\n\n`;

    conn.reply(m.chat, handlers, m, adReply );
  }

  if (command == 'database' || command == 'usuarios' || command == 'user') {
    const totalreg = Object.keys(global.db.data.users).length;
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;

    conn.reply(m.chat, ` 

🗂️ *Tengo ${rtotalreg} usuarios registrados*

📂 *${totalreg} no estan registrados*`, m, adReply );
  }
};
handler.help = ['dash', 'usuarios'];
handler.tags = ['main'];
handler.command = ['dashboard', 'dash', 'views', 'database', 'usuarios', 'user'];

export default handler;
