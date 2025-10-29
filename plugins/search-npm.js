import fetch from 'node-fetch';

const handler = async (m, {text}) => {
  if (!text) return conn.reply(m.chat, '🎌 *Ingrese lo que esta buscando*\n\nEjemplo, !npmjs module', m );
  const res = await fetch(`http://registry.npmjs.com/-/v1/search?text=${text}`);
  const {objects} = await res.json();
  if (!objects.length) return conn.reply(m.chat, `🚩 *La solicitud "${text}" no funciona*`, m);

  const txt = objects.map(({package: pkg}) => {
    return `*${pkg.name}* (v${pkg.version})\n_${pkg.links.npm}_\n_${pkg.description}_`;
  }).join`\n\n`;
  conn.reply(m.chat, txt, m);
};
handler.help = ['npmsearch'];
handler.tags = ['search'];
handler.command = /^npmjs|npmsearch?$/i;

export default handler;
